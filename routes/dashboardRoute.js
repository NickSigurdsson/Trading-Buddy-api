const router = require ('express').Router();
const dashboardController = require('../controllers/dashboardController');

// To get current news on the homepage
router.route('/').get(dashboardController.currentNews);

module.exports = router; 
