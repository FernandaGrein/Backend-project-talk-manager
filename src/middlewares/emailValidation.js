const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  
  if (!regex.test(email)) {
    return res.status(400)
        .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  return next();
};

module.exports = emailValidation;