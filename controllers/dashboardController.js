const axios = require('axios');
const knex = require("knex")(require("../knexfile"));
require('dotenv').config();
const url = require('url');
const{API_MARKETAUX,API_ALPHA_VANTAGE} = process.env;

exports.watchlist = async (req,res) => {
    try {
        const watchlistData = await knex("watchlist").select(
            "id",
            "ticker",
        );
        console.log(watchlistData);

        const latestStockPrice = [];
        for (let i=0;i<watchlistData.length;i++){
            const watchlistDataTicker = watchlistData[i].ticker
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
            const portfolioDataTicker = portfolioData[i].ticker
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
    const {ticker} = url.parse(req.url, true).query; 
    const newsListParameter = `symbols=${ticker}`;
    try{
        const response = await axios.get(`https://api.marketaux.com/v1/news/all?${newsListParameter}&filter_entities=true&language=en&limit=3&api_token=${API_MARKETAUX}`);
        res.json(response.data.data);
    } catch (err) {
        res.status(400).send(`Error retrieving News: ${err}`);
    }
}

exports.searchData = async (req,res) => {
    try{
        const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=${API_ALPHA_VANTAGE}`);
        const data = response.data;
        const searchResponse = data["bestMatches"];
        res.json(searchResponse);
    } catch (err) {
        res.status(400).send(`Error retrieving Warehouses: ${err}`);
    }
}

// exports.currentStockData = async (req,res) => {
//     const {ticker} = url.parse(req.url, true).query; 
//     const newsListParameter = `symbols=${ticker}`;
//     try{
//         const response = await axios.get(`https://api.marketaux.com/v1/news/all?${newsListParameter}&filter_entities=true&language=en&limit=3&api_token=${API_MARKETAUX}`);
//         res.json(response.data.data);
//     } catch (err) {
//         res.status(400).send(`Error retrieving News: ${err}`);
//     }
// }
