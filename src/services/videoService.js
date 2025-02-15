// src/services/videoService.js
const audioExtractor = require('./audioExtractor');
const translator = require('./translator');
const tts = require('./tts');

exports.processVideo = async (req, res) => {
  try {
    const audioPath = await audioExtractor.extract(req.file.path);
    const transcript = await translator.transcribe(audioPath);
    const translatedText = await translator.translate(transcript);
    const ttsPath = await tts.synthesize(translatedText);
    // TODO: Merge audio and video
    res.json({ transcript, translatedText, ttsPath });
  } catch (err) {
    res.status(500).send(err.message);
  }
};