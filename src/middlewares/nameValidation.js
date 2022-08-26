const nameValidation = (req, res, next) => {
 const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  
  if (name.lenght < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  return next();
};

module.exports = nameValidation;