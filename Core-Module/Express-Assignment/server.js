const express = require('express');

const app = express();


// app.use('/v1', (req, res, next) => {
//     console.log('First middleware');
//     next();
// });

// app.use('/v2', (req, res, next) => {
//     console.log('second middleware');
//     next();
// });

app.use('/user', (req, res, next) => {
    res.send('User page')
});

app.use('/', (req, res, next) => {
    // console.log('Third middleware');
    res.send('Home page')
});

app.listen(3000);