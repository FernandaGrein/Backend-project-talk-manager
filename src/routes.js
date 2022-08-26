const express = require('express');
const { readTalker } = require('./talkerReadAndWrite');

const routes = express.Router();

routes.get('/talker', async (req, res) => {
  const talkers = await readTalker();
  res.status(200).json(talkers);
});

routes.post('/', (req, res) => {
  res.status(400).json({ message: 'rota ainda não instalada' });
});

module.exports = routes;