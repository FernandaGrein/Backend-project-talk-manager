const { join } = require('path');

const fs = require('fs').promises;

const filePath = join(__dirname, '/talker.json');

const readTalker = async () => {
   const allTalkers = await fs.readFile(filePath, 'utf-8');
   return JSON.parse(allTalkers);
};

const readTalkerId = async (id) => {
    const talkers = await readTalker();
    
    const findTalker = talkers.find((person) => Number(person.id) === Number(id));

    if (findTalker) {
        return findTalker;
    }
    return null;
};

const writeToken = async (email, password, token) => {
    const newToken = {
        email, 
        password,
        token,
    };

    const talkers = await readTalker();
    const newData = [...talkers, { ...newToken }];
    await fs.writeFile(filePath, JSON.stringify(newData));
    return token;
};

const writeTalker = async (person) => {
    const talkers = await readTalker();
    const newData = [...talkers, { ...person }];
    await fs.writeFile(filePath, JSON.stringify(newData));
    return newData;
};

const getLastId = async () => {
    const Alltalkers = await readTalker();
    const lastId = Alltalkers.length;
    return lastId;
};

const editTalker = async (id, talker) => {
  let originalTalker = { ...await readTalkerId(id) };
  
   originalTalker = {
    name: talker.name,
    id, 
    age: talker.age,
    talk: {
        watchedAt: talker.watchedAt,
        rate: talker.rate,
    },
  };
  const allTalkers = await readTalker();
  allTalkers.splice(id, 1, originalTalker);

  await fs.writeFile(filePath, JSON.stringify(allTalkers));
};

module.exports = {
    readTalker,
    readTalkerId,
    writeToken,
    writeTalker,
    editTalker,
    getLastId,
};
