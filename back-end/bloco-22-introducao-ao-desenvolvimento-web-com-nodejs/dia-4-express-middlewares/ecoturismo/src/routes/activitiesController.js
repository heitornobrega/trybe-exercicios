const express = require('express');
const activityNameValidator = require('../middleware/activityNameValidator');
const activityPriceValidator = require('../middleware/activityPriceValidator');
const activityDescriptionValidator = require('../middleware/activityDescriptionValidator');
const activityCreatedAtValidator = require('../middleware/activityCreatedAtValidator');
const activityRatingValidator = require('../middleware/activityRatingValidator');
const activityDifficultyValidator = require('../middleware/activityDifficultyValidator');

const activitiesRoutes = express.Router();

activitiesRoutes
    .post(
        '/',
        activityNameValidator,
        activityPriceValidator,
        activityDescriptionValidator,
        activityCreatedAtValidator,
        activityRatingValidator,
        activityDifficultyValidator,
        (req, res) => {
    res.status(201).json({ message: `A atividade ${req.body.name} foi cadastrada com sucesso!` });
},
);

module.exports = activitiesRoutes;