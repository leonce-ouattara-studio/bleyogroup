import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', hasKey: !!process.env.GEMINI_API_KEY });
});

// Prompt Execution SSE API
app.post('/api/prompt', async (req, res) => {
  const {
    prompt,
    model = 'gemini-3.1-flash-lite',
    systemInstruction = 'Tu es un assistant IA expert, concis, rigoureux et précis.',
    temperature = 0.7,
  } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Le champ "prompt" est requis.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY n\'est pas configurée.' });
  }

  const ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  try {
    const stream = await ai.models.generateContentStream({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: Number(temperature),
      },
    });

    let totalText = '';
    for await (const chunk of stream) {
      if (chunk.text) {
        totalText += chunk.text;
        res.write(`data: ${JSON.stringify({ text: chunk.text })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ done: true, totalLength: totalText.length })}\n\n`);
    res.end();
  } catch (err: any) {
    const errMsg = err?.message || String(err);
    if (model !== 'gemini-3.1-flash-lite' && (errMsg.includes('503') || errMsg.includes('high demand'))) {
      try {
        res.write(`data: ${JSON.stringify({ warning: 'Modèle saturé, bascule vers gemini-3.1-flash-lite...' })}\n\n`);
        const fallbackStream = await ai.models.generateContentStream({
          model: 'gemini-3.1-flash-lite',
          contents: prompt,
          config: {
            systemInstruction: systemInstruction,
            temperature: Number(temperature),
          },
        });

        for await (const chunk of fallbackStream) {
          if (chunk.text) {
            res.write(`data: ${JSON.stringify({ text: chunk.text })}\n\n`);
          }
        }
        res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
        res.end();
        return;
      } catch (fallbackErr: any) {
        res.write(`data: ${JSON.stringify({ error: fallbackErr?.message || 'Erreur fallback' })}\n\n`);
        res.end();
        return;
      }
    }
    res.write(`data: ${JSON.stringify({ error: errMsg })}\n\n`);
    res.end();
  }
});

// Serve frontend static files in production
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur Prompt.js démarré sur http://localhost:${PORT}`);
});
