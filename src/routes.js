const express = require('express');
const { readTalker, readTalkerId } = require('./talkerReadAndWrite');

const routes = express.Router();

routes.get('/talker', async (req, res) => {
  const talkers = await readTalker();
  return res.status(200).json(talkers);
});

routes.get(('/talker/:id'), async (req, res) => {
    const { id } = req.params;
    const findPerson = await readTalkerId(id);

    if (findPerson) {
        return res.status(200).json(findPerson);
    }
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

routes.post('/', (req, res) => {
  res.status(400).json({ message: 'rota ainda não instalada' });
});

module.exports = routes;