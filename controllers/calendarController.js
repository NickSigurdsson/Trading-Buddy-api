const axios = require('axios')
require('dotenv').config();
const{API_EODHISTORICALDATA} = process.env;

exports.currentEvent = async (req,res) => {
    try{
        const response = await axios.get('https://eodhistoricaldata.com/api/economic-events?country=US&api_token=' + API_EODHISTORICALDATA);
        res.json(response.data);
        console.log(response.data);
    } catch (err) {
        res.status(400).send(`Error retrieving Warehouses: ${err}`);
        console.log(err);
    }
}