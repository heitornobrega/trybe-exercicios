const express = require('express');
const tokenGenerator = require('../tokenGenerator/tokenGenerator');
const userEmailValidator = require('../middleware/userEmailValidator');

const token = tokenGenerator();
const usersRoutes = express.Router();

usersRoutes.post('/', userEmailValidator, (req, res) => {
    res.status(200).json({ token: `${token}` });
});

module.exports = usersRoutes;