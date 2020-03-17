var express = require('express');
var app = express();
require('dotenv').config();
var getResult = require('./scrapper');
const cors = require('cors');


app.use(cors({}));

app.get('/', (req, res)=>{
    getResult().then((result)=>{
        res.json(result)
    }).catch((err)=>{
        return console.log(err);
    })

   
    
})


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`)
})

