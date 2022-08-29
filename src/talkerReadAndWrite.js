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

const editTalker = async (paramnsId, talker) => {
  let originalTalker = { ...await readTalkerId(paramnsId) };
  
   originalTalker = {
    name: talker.name,
    id: Number(paramnsId),
    age: talker.age,
    talk: talker.talk,
  };
  const allTalkers = await readTalker();
  allTalkers.splice(paramnsId, 1, originalTalker);

  await fs.writeFile(filePath, JSON.stringify(allTalkers));
  return originalTalker;
};

const deleteTalker = async (id) => {
    const talkers = [...await readTalker()];
    const removedTalker = talkers.filter((item) => Number(item.id) !== Number(id));

    await fs.writeFile(filePath, JSON.stringify(removedTalker));
};

const searchTalkByQyery = async (query) => {
    const talkers = [...await readTalker()];
    const filter = talkers.filter((person) => person.name.includes(query));
    if (filter) {
        return filter;
    }
    return talkers;
};

module.exports = {
    readTalker,
    readTalkerId,
    writeToken,
    writeTalker,
    editTalker,
    getLastId,
    deleteTalker,
    searchTalkByQyery,
};
