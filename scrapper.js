const cheerio= require('cheerio');
const axios = require('axios');


const url = "https://www.worldometers.info/coronavirus/";

var source = "";
var numbers = [];


const fetchData = async (url)=>{
    const result = await axios.get(url);

    return cheerio.load(result.data);
}


const getResult = async (url) =>{
    const $ = await fetchData(url);
    numbers.length=0;

source = $('a.navbar-brand > img').attr('title');

$('div.maincounter-number').each((index ,e)=>{
    numbers.push($(e).text());
})


return {
    numbers: numbers,
    source: source
}

}

module.exports = getResult;