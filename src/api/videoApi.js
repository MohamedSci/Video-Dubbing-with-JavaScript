// src/api/videoApi.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const videoService = require('../services/videoService');

router.post('/upload', upload.single('video'), videoService.processVideo);

module.exports = router;