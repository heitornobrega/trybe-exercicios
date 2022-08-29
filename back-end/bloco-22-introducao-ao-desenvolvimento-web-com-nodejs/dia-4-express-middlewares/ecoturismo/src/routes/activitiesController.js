const express = require('express');
const activityNameValidator = require('../middleware/activityNameValidator');
const activityPriceValidator = require('../middleware/activityPriceValidator');

const activitiesRoutes = express.Router();

activitiesRoutes
    .post(
        '/',
        activityNameValidator,
        activityPriceValidator,
        (req, res) => {
    res.status(201).json({ message: `A atividade ${req.body.name} foi cadastrada com sucesso!` });
},
);

module.exports = activitiesRoutes;