const express =  require('express');
const bodyParser = require('body-parser');
const app = express();
const htmlForm = `
<html>
    <head>
        <title>Express Routing</title>
    </head>
    <body>
        <form action='/create-product' method='POST'>
            <input name='productName' type='text'>
            <button type='submit'>Create Product </button>
        </form>
    </body>
</html>
`;

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/create-product', (req, res, next) => {
    console.log('req', req.body);
    res.redirect('/');
});

app.use('/', (req, res) => {
    res.send(htmlForm);
});

app.listen(3000);