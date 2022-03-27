const express = require('express');

const route = express.Router();

route.use('/', (req, res, next) => {
    console.log('home page');
});

module.exports = route;