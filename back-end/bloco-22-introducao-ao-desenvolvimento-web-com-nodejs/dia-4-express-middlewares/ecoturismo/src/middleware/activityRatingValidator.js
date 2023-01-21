const activityRatingValidator = (req, res, next) => {
    const { rating } = req.body.description;
    if (Number(rating) > 5 || Number(rating) < 1) {
        return res.status(400).json({ message: 'o campo rating deve estar entre 1 e 5.' });
    }
    next();
};

module.exports = activityRatingValidator;