#!/usr/bin/env node

/**
 * Prompt.js - Exécuteur officiel de prompts Gemini pour AI Studio & Node.js
 * 
 * Exemples :
 *   node prompt.js "Explique la photosynthèse simplement"
 *   node prompt.js --model gemini-3.1-flash-lite "Écris un script bash"
 *   node prompt.js --system "Tu es un critique gastronomique" "Décris une pizza 4 fromages"
 *   echo "Quelle est la capitale du Pérou ?" | node prompt.js
 */

import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import fs from 'fs';

// Charger les variables d'environnement
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('\n\x1b[31m✖ Erreur : GEMINI_API_KEY est introuvable.\x1b[0m');
  console.error('Veuillez configurer GEMINI_API_KEY dans votre fichier .env ou les variables d\'environnement.\n');
  process.exit(1);
}

// Initialisation conforme aux standards Google GenAI
const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Analyse des arguments
const args = process.argv.slice(2);
let model = 'gemini-3.1-flash-lite'; // modèle ultra-rapide et stable par défaut
let systemInstruction = 'Tu es un assistant IA expert, concis, rigoureux et pertinent.';
let temperature = 0.7;
let promptParts = [];
let isHelp = false;

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--help' || arg === '-h') {
    isHelp = true;
  } else if (arg === '--model' || arg === '-m') {
    model = args[++i] || model;
  } else if (arg === '--system' || arg === '-s') {
    systemInstruction = args[++i] || systemInstruction;
  } else if (arg === '--temp' || arg === '-t') {
    temperature = parseFloat(args[++i]) || 0.7;
  } else if (!arg.startsWith('-')) {
    promptParts.push(arg);
  }
}

if (isHelp) {
  console.log(`
\x1b[36m┌──────────────────────────────────────────────┐
│        Prompt.js - Exécuteur Gemini CLI      │
└──────────────────────────────────────────────┘\x1b[0m

\x1b[1mUTILISATION :\x1b[0m
  node prompt.js [options] "Votre prompt"

\x1b[1mOPTIONS :\x1b[0m
  -m, --model <nom>       Modèle (défaut: gemini-3.1-flash-lite ou gemini-3.8-flash)
  -s, --system <texte>    Instruction système (persona)
  -t, --temp <valeur>     Température de créativité (0.0 à 1.0, défaut: 0.7)
  -h, --help              Affiche cette documentation

\x1b[1mEXEMPLES :\x1b[0m
  node prompt.js "Quelle est la distance Terre-Lune ?"
  node prompt.js -m gemini-3.8-flash "Analyse ce code SQL"
  node prompt.js -s "Tu es poète" "Écris sur le printemps"
  cat note.txt | node prompt.js
`);
  process.exit(0);
}

async function readStdinIfPiped() {
  if (process.stdin.isTTY) return '';
  return new Promise((resolve) => {
    let data = '';
    const onData = (chunk) => { data += chunk; };
    const onEnd = () => { cleanup(); resolve(data.trim()); };
    const timeout = setTimeout(() => { cleanup(); resolve(''); }, 60);

    function cleanup() {
      clearTimeout(timeout);
      process.stdin.removeListener('data', onData);
      process.stdin.removeListener('end', onEnd);
      process.stdin.pause();
    }

    process.stdin.setEncoding('utf-8');
    process.stdin.on('data', onData);
    process.stdin.on('end', onEnd);
    process.stdin.resume();
  });
}

async function executePrompt(promptText, selectedModel = model) {
  const startTime = Date.now();
  console.log(`\n\x1b[38;5;141m⚡ Exécution du prompt via Prompt.js\x1b[0m`);
  console.log(`\x1b[90m┌ Modèle     : \x1b[37m${selectedModel}\x1b[0m`);
  console.log(`\x1b[90m├ Température: \x1b[37m${temperature}\x1b[0m`);
  console.log(`\x1b[90m└ Prompt     : \x1b[36m"${promptText.length > 80 ? promptText.slice(0, 77) + '...' : promptText}"\x1b[0m`);
  console.log(`\x1b[90m──────────────────────────────────────────────────────────\x1b[0m\n`);

  try {
    const stream = await ai.models.generateContentStream({
      model: selectedModel,
      contents: promptText,
      config: {
        systemInstruction: systemInstruction,
        temperature: temperature,
      },
    });

    let fullText = '';
    for await (const chunk of stream) {
      if (chunk.text) {
        process.stdout.write(chunk.text);
        fullText += chunk.text;
      }
    }

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`\n\n\x1b[90m──────────────────────────────────────────────────────────\x1b[0m`);
    console.log(`\x1b[32m✔ Succès en ${duration}s\x1b[0m • \x1b[90mCaractères reçus: ${fullText.length}\x1b[0m\n`);
    return { success: true, text: fullText, duration };
  } catch (err) {
    const errorMessage = err?.message || String(err);
    // Gestion résiliente des indisponibilités de charge 503
    if (errorMessage.includes('503') || errorMessage.includes('high demand') || errorMessage.includes('UNAVAILABLE')) {
      if (selectedModel !== 'gemini-3.1-flash-lite') {
        console.warn(`\n\x1b[33m⚠ Le modèle ${selectedModel} est en surcharge temporaire. Bascule automatique vers gemini-3.1-flash-lite...\x1b[0m\n`);
        return executePrompt(promptText, 'gemini-3.1-flash-lite');
      }
    }
    console.error(`\n\x1b[31m✖ Erreur d'exécution:\x1b[0m ${errorMessage}`);
    process.exit(1);
  }
}

async function main() {
  let promptText = promptParts.join(' ').trim();

  if (!promptText) {
    try {
      const pipedData = await readStdinIfPiped();
      if (pipedData) {
        promptText = pipedData;
      }
    } catch {
      // Ignorer
    }
  }

  if (!promptText) {
    console.log(`\x1b[34mℹ Aucun prompt spécifié.\x1b[0m`);
    console.log(`\x1b[90mLancement du test de validation Prompt.js avec Gemini...\x1b[0m`);
    promptText = "Présente Prompt.js en 2 phrases dynamiques avec ses avantages principaux.";
  }

  await executePrompt(promptText);
}

main();
