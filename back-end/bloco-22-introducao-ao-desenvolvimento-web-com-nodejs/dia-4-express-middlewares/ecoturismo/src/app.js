const express = require('express');
const activitiesController = require('./routes/activitiesController');
const usersController = require('./routes/usersController');

const app = express();

app.use(express.json());
app.use('/activities', activitiesController);
app.use('/signup', usersController);

app.get('/', (req, res) => res.status(200).json({ msg: 'Home page' }));

module.exports = app;