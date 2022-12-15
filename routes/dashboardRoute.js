const router = require ('express').Router();
const dashboardController = require('../controllers/dashboardController');

// To get current news on the homepage
router
    .route('/watchlist')
    .get(dashboardController.watchlist);
//     .post(dashboardController.addToWatchlist);
router
    .route('/portfolio')
    .get(dashboardController.portfolio)
//     .post(dashboardController.addToWatchlist);
// router
//     .route('/chart')
//     .get(dashboardController.stockChartData);
router
    .route('/news')
    .get(dashboardController.currentNews)
router
    .route('/search')
    .get(dashboardController.searchData)

module.exports = router; 
