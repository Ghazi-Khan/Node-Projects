const express = require('express');
const app = express();

const adminRoute = require('./routes/admin');

app.use('/admin', adminRoute);

app.use((req, res) => {
    res.status(404);
    res.send('File not found!');
});

app.listen(3000);