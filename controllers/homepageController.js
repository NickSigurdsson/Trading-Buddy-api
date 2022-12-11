const axios = require('axios')
require('dotenv').config();
const{API_MARKETAUX,API_ALPHA_VANTAGE} = process.env;

exports.currentNews = async (req,res) => {
    try{
        const response = await axios.get('https://api.marketaux.com/v1/news/all?exchanges=NYSE&filter_entities=true&language=en&limit=3&api_token=' + API_MARKETAUX);
        // SEND IS LIKE A RETURN, IF YOU DON'T DO IT IT IT WILL GIVE YOU AN ERROR
        res.json(response.data.data);
        // console.log(response.data.data);
    } catch (err) {
        res.status(400).send(`Error retrieving Warehouses: ${err}`);
    }
}
