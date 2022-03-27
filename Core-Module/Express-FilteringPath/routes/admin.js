const express = require('express');

const route = express.Router();


route.get('/login', (req, res, next) => {
    console.log('admin login page');
    res.send('admin login page');
});


module.exports = route;
