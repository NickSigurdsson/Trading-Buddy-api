const axios = require('axios')
const{PORT,API_MARKETAUX,API_ALPHA_VANTAGE} = process.env;
require('dotenv').config();

exports.currentNews = async () => {
    // try{
    //     const response = await axios.get(
    //         'https://api.marketaux.com/v1/news/all?exchanges=NYSE&filter_entities=true&language=en&limit=3&api_token=' + API_MARKETAUX
    //     );
    // console.log(response.data);
    // } catch (err) {
    //     res.status(400).send(`Error retrieving Warehouses: ${err}`);
    console.log('test')
    
}