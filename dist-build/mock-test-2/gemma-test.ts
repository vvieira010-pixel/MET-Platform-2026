import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env.local' });

async function main() {
  const ai = new GoogleGenAI({
    apiKey: process.env['GEMINI_API_KEY'] || process.env['GEMINI_API_KEY_FALLBACK'],
  });
  const tools = [{ googleSearch: {} }];
  const config = {
    thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH },
    tools,
  };
  const model = 'gemma-4-31b-it';
  const contents = [
    {
      role: 'user',
      parts: [{ text: 'Explain quantum computing in 2 sentences.' }],
    },
  ];

  const response = await ai.models.generateContentStream({ model, config, contents });
  for await (const chunk of response) {
    if (chunk.text) process.stdout.write(chunk.text);
  }
}

main().catch(console.error);
