const userEmailValidator = (req, res, next) => {
    const { email } = req.body;
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        return res.status(401).json({ message: 'O campo email é obrigatório' });
    }
    next();
};

module.exports = userEmailValidator;