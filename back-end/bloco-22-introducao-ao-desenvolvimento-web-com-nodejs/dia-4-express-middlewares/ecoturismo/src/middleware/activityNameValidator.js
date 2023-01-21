const activityNameValidator = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json(
          { message: 'O campo name é obrigatório' },
        );
    }
    if (name.length < 4) {
        return res.status(400).json(
            { message: 'O campo name deve possuir mais de 4 caracteres' },
          );
    }
    if (name && name.length > 4) {
        next();
    }
};

module.exports = activityNameValidator;