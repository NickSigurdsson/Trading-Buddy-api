const router = require ('express').Router();
const calendarController = require('../controllers/calendarController');

// To get current news on the homepage
router
    .route('/')
    .get(calendarController.currentEvent);

module.exports = router; 
