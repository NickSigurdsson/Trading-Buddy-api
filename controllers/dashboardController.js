const axios = require('axios');
const knex = require("knex")(require("../knexfile"));
require('dotenv').config();
const{API_MARKETAUX,API_ALPHA_VANTAGE} = process.env;

exports.watchlist = async (req,res) => {
    try {
        const watchlistData = await knex("watchlist").select(
            "id",
            "ticker",
        );
        const watchlistDataTicker = watchlistData[0].ticker
        // // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MMAT&outputsize=compact&apikey=3NSM9679F4Z9LTNT
        const axiosResponse = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${watchlistDataTicker}&outputsize=compact&apikey=${API_ALPHA_VANTAGE}`);
        const axiosData = axiosResponse.data;
        const latestStockPrice = axiosData['Time Series (Daily)'][key]['1. open'];
       
        // for (let i=0;i<watchlistData.length;i++){
        //     // this is how to grab the ticker for each item in the list
        // }
        // console.log(axiosResponse);
        // console.log(watchlistData);

        res.status(200).json(latestStockPrice);
        } catch (err) {
        res.status(400).send(`Error retrieving Watchlist: ${err}`);
    };
};

exports.portfolio = async (req,res) => {
    try {
        const portfolioData = await knex("portfolio").select(
            "id",
            "ticker",
        );
        res.status(200).json(portfolioData);
        } catch (err) {
        res.status(400).send(`Error retrieving Portfolio: ${err}`);
    };
};

exports.currentNews = async (req,res) => {
    // input from front end (endpoint used): http://localhost:8080/dashboard/news
    const newsListParameter = 'symbols=TSLA';
    try{
        const response = await axios.get(`https://api.marketaux.com/v1/news/all?${newsListParameter}&filter_entities=true&language=en&limit=3&api_token=${API_MARKETAUX}`);
        // SEND IS LIKE A RETURN, IF YOU DON'T DO IT IT IT WILL GIVE YOU AN ERROR
        res.json(response.data.data);
        // console.log(response.data.data);
    } catch (err) {
        res.status(400).send(`Error retrieving Warehouses: ${err}`);
    }
}
