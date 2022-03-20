const express = require('express');

const app = express();

// Understanding and Working with Routes

// home page
app.get('/', (req, res) => {
    const response = `<h1>Hello World!</h1>`
    res.send(response);
});

//  contact
app.get('/contact', (req, res) => {
    res.send('contact me at mailme.gkhan@gmail.com');
})

// about
app.get('/about', (req, res) => {
    res.send('Hey, Ghazi khan is here, I am a developer!, who loves to write code a lot');
});

app.listen(3000, () => {
    console.log('Server started..');
});
