const express = require('express');

const route = express.Router();

route.get('/shop', (req, res, next) => {
    console.log('shop...');
});

module.exports = route;
