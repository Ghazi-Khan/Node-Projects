const express = require('express');

const route = express.Router();

route.get('/login', (req, res, next) => {
    console.log('home page');
});

module.exports = route;