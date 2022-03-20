const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const responseFileName = __dirname + '/index.html';
    // res.send('Hello World!');
    res.sendFile(responseFileName);

});

app.listen(3000, () => {
    console.log('Server started...');
});


//  What we  have learnt in this project :
// Summary =>

// 1. To send a file as a response we have to use sendFile()
// 2. We shlould use not use relative path
// 3. __direName, will give the directory path