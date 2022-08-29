const express = require('express');
const activityNameValidator = require('../middleware/activityNameValidator');
const activityPriceValidator = require('../middleware/activityPriceValidator');
const activityDescriptionValidator = require('../middleware/activityDescriptionValidator');

const activitiesRoutes = express.Router();

activitiesRoutes
    .post(
        '/',
        activityNameValidator,
        activityPriceValidator,
        activityDescriptionValidator,
        (req, res) => {
    res.status(201).json({ message: `A atividade ${req.body.name} foi cadastrada com sucesso!` });
},
);

module.exports = activitiesRoutes;