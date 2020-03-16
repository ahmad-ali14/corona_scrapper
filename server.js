var express = require('express');
var app = express();
require('dotenv').config();

app.get('/', (req, res)=>{
    res.send('working .....')
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`)
})