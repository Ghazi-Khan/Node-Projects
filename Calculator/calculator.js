const express = require('express');
const bodyParser = require('body-parser');
const calculations = require('./calculations');

const app = express();

// using app.use to use middleware
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    const responseFileName = __dirname + '/index.html';
    // res.send('Hello World!');
    res.sendFile(responseFileName);

});

app.post('/', (req, res) => {
    // const num1 = req.params
    // console.log('req', req.body);

    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = calculations.add(num1, num2);

    res.send(`Response ${result}`)
});

app.listen(3000, () => {
    console.log('Server started...');
});


//  What we  have learnt in this project :
// Summary =>

// 1. To send a file as a response we have to use sendFile()
// 2. We shlould use not use relative path
// 3. __direName, will give the directory path
// 4. To access the post parameters we need body-parser npm package.