const talkValidation = (req, res, next) => {
    const { talk } = req.body;
    const regex = /^([1-9]|\d{2})\/\d{2}\/\d{4}$/;
    // const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
    if (!talk) {
      return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
    }

    if (!talk.watchedAt) {
      return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }
    
    if (!regex.test(talk.watchedAt)) {
      return res.status(400)
        .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }

    return next();
};

module.exports = talkValidation;