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

        const latestStockPrice = [];
        for (let i=0;i<watchlistData.length;i++){
            // this is how to grab the ticker for each item in the list
            const watchlistDataTicker = watchlistData[i].ticker
            // // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MMAT&outputsize=compact&apikey=3NSM9679F4Z9LTNT
            const axiosResponse = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${watchlistDataTicker}&outputsize=compact&apikey=${API_ALPHA_VANTAGE}`);
            const axiosData = axiosResponse.data;
            const stockPriceList = Object.values(axiosData)[1];
            latestStockPrice.push(Object.values(stockPriceList)[0]['4. close']);
            watchlistData[i].price = latestStockPrice[i];
        }

        res.status(200).json(watchlistData);
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

        const latestStockPrice = [];
        for (let i=0;i<portfolioData.length;i++){
            // this is how to grab the ticker for each item in the list
            const portfolioDataTicker = portfolioData[i].ticker
            // // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MMAT&outputsize=compact&apikey=3NSM9679F4Z9LTNT
            const axiosResponse = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${portfolioDataTicker}&outputsize=compact&apikey=${API_ALPHA_VANTAGE}`);
            const axiosData = axiosResponse.data;
            const stockPriceList = Object.values(axiosData)[1];
            latestStockPrice.push(Object.values(stockPriceList)[0]['4. close']);
            portfolioData[i].price = latestStockPrice[i];
        }

        res.status(200).json(portfolioData);
        } catch (err) {
        res.status(400).send(`Error retrieving Portfolio: ${err}`);
    };
};

exports.currentNews = async (req,res) => {
    // input from front end (endpoint used): http://localhost:8080/dashboard/news
    const newsListParameter = 'symbols=MMAT';
    try{
        const response = await axios.get(`https://api.marketaux.com/v1/news/all?${newsListParameter}&filter_entities=true&language=en&limit=3&api_token=${API_MARKETAUX}`);
        // SEND IS LIKE A RETURN, IF YOU DON'T DO IT IT IT WILL GIVE YOU AN ERROR
        res.json(response.data.data);
        // console.log(response.data.data);
    } catch (err) {
        res.status(400).send(`Error retrieving News: ${err}`);
    }
}

exports.searchData = async (req,res) => {
    // input from front end (endpoint used): http://localhost:8080/dashboard/search
    // in phase 2, we will have a variable here that will continously update the api call so that we can type anything into the bar, not just ba.
    try{
        const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=${API_ALPHA_VANTAGE}`);
        const data = response.data;
        const searchResponse = data["bestMatches"];
        res.json(searchResponse);
    } catch (err) {
        res.status(400).send(`Error retrieving Warehouses: ${err}`);
    }
}
