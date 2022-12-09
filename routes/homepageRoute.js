const router = require ('express').Router();
const homepageController = require('../controllers/homepageController');

// To get current news on the homepage
router
    .route('/')
    .get(homepageController.currentNews);

module.exports = router; 
