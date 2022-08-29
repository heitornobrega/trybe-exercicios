const activityPriceValidator = (req, res, next) => {
    const { price } = req.body;
    if (!price) {
        return res.status(400).json({ message: 'A chave price é obrigatória!' });
    }
    if (Number(price) < 0) {
        return res.status(400).json({ message: 'Price precisa ser maior ou igual a zero' });
    }
    if (price && Number(price) >= 0) {
        next();
    }
};

module.exports = activityPriceValidator;