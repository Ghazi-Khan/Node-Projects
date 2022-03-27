const express = require('express');

const adminRoute = require('./Routes/admin');
const shopRoute = require('./Routes/shop');

const app = express();

app.use(shopRoute);
app.use(adminRoute);

app.use((req, res, next) => {
    res.status(404);
    res.send('Page not found!')
});

app.listen('3000');