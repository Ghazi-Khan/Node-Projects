const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const response = `<h1>Hey Ghazi, how u doing!</h1>`
    res.send(response);
})

app.listen(3000, () => {
    console.log('Server started..');
});


