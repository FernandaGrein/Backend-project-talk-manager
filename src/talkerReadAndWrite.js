const { join } = require('path');

const fs = require('fs').promises;

const filePath = join(__dirname, '/talker.json');
console.log(filePath);
const readTalker = async () => {
   const allTalkers = await fs.readFile(filePath, 'utf-8');
   return JSON.parse(allTalkers);
};

module.exports = {
    readTalker,
};
