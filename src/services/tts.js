// src/services/tts.js
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
const client = new textToSpeech.TextToSpeechClient();
exports.synthesize = async (text) => {
  const [response] = await client.synthesizeSpeech({ input: { text }, voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' }, audioConfig: { audioEncoding: 'MP3' } });
  const outputPath = 'outputs/tts.mp3';
  fs.writeFileSync(outputPath, response.audioContent, 'binary');
  return outputPath;
};
