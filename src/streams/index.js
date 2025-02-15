// src/index.js

require('dotenv').config();
const express = require('express');
const app = express();
const videoApi = require('../api/videoApi');

app.use(express.json());
app.use('/api/video', videoApi);

app.listen(4444, () => console.log('Server started on http://localhost:4444'));