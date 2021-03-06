// Setup empty JS object to act as endpoint for all routes

const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
const port = 8000;
// -------------Setup Server---------------------------
const server = app.listen(port, listening);
function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};
//----------------GET route-------------------------------

 const projectData=[];
 app.get('/all', (req, res) => {
  res.send(projectData)
  console.log(projectData);
})
//----------------POST route-------------------------------

app.post('/addWeather', addWeather);

function addWeather(req, res) {
    newEntry = {
        temp: req.body.temp,
        date: req.body.date,
        feelings: req.body.feelings,
        city:req.body.city
    }
    projectData.push(newEntry)
    res.send(projectData)
    console.log('POST')
    console.log(projectData)
}
//-----------------------------------------------------

