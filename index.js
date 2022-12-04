const axios = require('axios')
const express = require('express');
const app = express();
require('dotenv').config();
const{PORT,API_MARKETAUX,API_ALPHA_VANTAGE} = process.env;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(PORT,()=>{
    console.log('app is litening to port 8080');
})

axios
    .get('https://api.marketaux.com/v1/news/all?exchanges=NYSE&filter_entities=true&language=en&limit=3&api_token=' + API_MARKETAUX)
    .then(response=>{
        console.log(response.data);
    }).catch(error=>{
        console.log(error);
    });
// fetch('https://api.marketaux.com/v1/news/all?exchanges=NYSE&filter_entities=true&language=en&limit=3&api_token=' + API_MARKETAUX).then(response=>response.json()).then(response=>console.log(response.data[0].uuid));
