const http = require('http');
const express = require('express');

const app = express();

// writting middleware

app.use((req, res, next) => {
    console.log('First middleware');
    next();
});

app.use((req, res, next) => {
    console.log('Second middleware');
});

const server = http.createServer(app);
server.listen(3000);