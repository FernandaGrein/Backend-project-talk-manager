const express = require('express');
const { readTalker, readTalkerId, writeToken, writeTalker } = require('./talkerReadAndWrite');
const emailValidation = require('./middlewares/emailValidation');
const passwordValidation = require('./middlewares/passwordValidation');
const tokenValidation = require('./middlewares/tokenValidation');
const nameValidation = require('./middlewares/nameValidation');
const ageValidation = require('./middlewares/ageValidation');
const talkValidation = require('./middlewares/talkValidation');
const talkRateValidation = require('./middlewares/talkRateValidation');

const routes = express.Router();

routes.get('/talker', async (req, res) => {
  const talkers = await readTalker();
  return res.status(200).json(talkers);
});

routes.post('/talker', tokenValidation, nameValidation, ageValidation, 
    talkValidation, talkRateValidation, async (req, res) => {
    const person = req.body;

    await writeTalker(person);
    res.status(201).json(person);
});

routes.get(('/talker/:id'), async (req, res) => {
    const { id } = req.params;
    const findPerson = await readTalkerId(id);

    if (findPerson) {
        return res.status(200).json(findPerson);
    }
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

routes.post('/login', emailValidation, passwordValidation, async (req, res) => {
  const { email, password } = req.body;
  const token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
  const newtoken = token.substr(0, 16);

  await writeToken(email, password, newtoken);

  return res.status(200).json({ token: newtoken });
});

module.exports = routes;