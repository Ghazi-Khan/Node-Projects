const express = require("express");
const bodyParser = require("body-parser");
const { getBmi } = require("./bmiCalculations");
const app = express();

// using express.static to load the static contain
app.use(express.static(__dirname + '/resources'));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  console.log("req received..");
  // res.send("Request completed..");
  const bimFormFilePath = __dirname + '/bmiCalculator.html';
  res.sendFile(bimFormFilePath)
});

app.post('/bmicalculator', (req, res) => {

  const height = req.body.height;
  const weight = req.body.weight;

  const bmi = getBmi(height, weight);

  res.send('Your BMI is ' + bmi);

});

app.listen(3000, () => {
  console.log("BMI server is listing at port 3000");
});
