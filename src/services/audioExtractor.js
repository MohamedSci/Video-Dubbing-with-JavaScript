// src/services/audioExtractor.js
const ffmpeg = require('fluent-ffmpeg');
exports.extract = (videoPath) => new Promise((resolve, reject) => {
  const outputPath = 'outputs/audio.wav';
  ffmpeg(videoPath).output(outputPath).on('end', () => resolve(outputPath)).on('error', reject).run();
});