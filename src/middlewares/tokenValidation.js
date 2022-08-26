const tokenValidation = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (Number(authorization.length) !== Number(16)) {
        return res.status(401).json({ message: 'Token inválido' });   
    }

    return next();
};

module.exports = tokenValidation;