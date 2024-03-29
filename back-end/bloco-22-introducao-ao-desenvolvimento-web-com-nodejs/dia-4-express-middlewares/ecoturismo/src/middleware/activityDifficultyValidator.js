const activityDifficultyValidator = (req, res, next) => {
    const { difficulty } = req.body.description;
    const validClasses = ['Fácil', 'Médio', 'Difícil'];
    if (!validClasses.includes(difficulty)) {
        return res.status(400).json({
            message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'',
        });
    }
    next();
};

module.exports = activityDifficultyValidator;
