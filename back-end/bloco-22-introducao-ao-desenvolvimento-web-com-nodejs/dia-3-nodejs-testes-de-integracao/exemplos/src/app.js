const express = require('express');
const cacaoTrybe = require('./cacaoTrybe');

const app = express();

app.get('/chocolates', async (req, res) => {
    const chocolates = await cacaoTrybe.getAllChocolates();
    res.status(200).json({ chocolates });
});

// app.get('/chocolates/total', )

module.exports = app;