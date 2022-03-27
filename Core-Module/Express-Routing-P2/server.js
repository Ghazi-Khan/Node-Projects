const express = require('express');

const adminRoute = require('./Routes/admin');
const shopRoute = require('./Routes/shop');

const app = express();

app.use(shopRoute);
app.use(adminRoute);

app.listen('3000');