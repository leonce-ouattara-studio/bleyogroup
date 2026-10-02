import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

function promptApiPlugin(): Plugin {
  return {
    name: 'prompt-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/health' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ status: 'ok', hasKey: !!process.env.GEMINI_API_KEY }));
          return;
        }

        if (req.url === '/api/prompt' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });

          req.on('end', async () => {
            try {
              const {
                prompt,
                model = 'gemini-3.1-flash-lite',
                systemInstruction = 'Tu es un assistant IA expert, concis, rigoureux et précis.',
                temperature = 0.7,
              } = JSON.parse(body || '{}');

              if (!prompt) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Le champ "prompt" est requis.' }));
                return;
              }

              const apiKey = process.env.GEMINI_API_KEY;
              if (!apiKey) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'GEMINI_API_KEY n\'est pas configurée.' }));
                return;
              }

              const ai = new GoogleGenAI({
                apiKey: apiKey,
                httpOptions: {
                  headers: {
                    'User-Agent': 'aistudio-build',
                  },
                },
              });

              // Configuration SSE pour le streaming en direct
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
              } catch (genError: any) {
                const errMsg = genError?.message || String(genError);
                // Si modèle saturé 503, tentative de repli vers flash-lite
                if (model !== 'gemini-3.1-flash-lite' && (errMsg.includes('503') || errMsg.includes('high demand'))) {
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
                }

                res.write(`data: ${JSON.stringify({ error: errMsg })}\n\n`);
                res.end();
              }
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err?.message || 'Erreur serveur interne' }));
            }
          });
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), promptApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
