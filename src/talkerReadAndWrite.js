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

module.exports = {
    readTalker,
    readTalkerId,
};
