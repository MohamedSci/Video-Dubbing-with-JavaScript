// src/services/translator.js
const { Deepgram } = require('@deepgram/sdk');
const translate = require('@vitalets/google-translate-api');
exports.transcribe = async (audioPath) => {
  const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);
  const audio = require('fs').readFileSync(audioPath);
  const response = await deepgram.transcription.preRecorded({ buffer: audio, mimetype: 'audio/wav' });
  return response.results.channels[0].alternatives[0].transcript;
};
exports.translate = async (text) => (await translate(text, { from: 'ar', to: 'en' })).text;