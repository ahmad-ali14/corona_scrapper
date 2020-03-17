var express = require('express');
var app = express();
require('dotenv').config();
var getResult = require('./scrapper');
const cors = require('cors');


app.use(cors({}));

app.get('/', (req, res)=>{
    getResult("https://www.worldometers.info/coronavirus/").then((result)=>{
        res.json(result)
    }).catch((err)=>{
        return console.log(err);
    })
   
})

app.get('/uk', (req, res)=>{
    getResult("https://www.worldometers.info/coronavirus/country/uk/").then((result)=>{
        res.json(result)
    }).catch((err)=>{
        return console.log(err);
    })
   
})

app.get('/spain', (req, res)=>{
    getResult("https://www.worldometers.info/coronavirus/country/spain/").then((result)=>{
        res.json(result)
    }).catch((err)=>{
        return console.log(err);
    })
   
})


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`)
})

