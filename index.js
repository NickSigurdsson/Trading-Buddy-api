// Modules
// const axios = require('axios')
const express = require('express');
const app = express();
require('dotenv').config();
const{PORT} = process.env;
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const homepageRoute = require('./routes/homepageRoute');
const dashboardRoute = require('./routes/dashboardRoute');
const calendarRoute = require('./routes/calendarRoute');

// Routes used for different API calls
app.use('/',homepageRoute);
app.use('/dashboard',dashboardRoute);
app.use('/calendar',calendarRoute);

app.listen(PORT,()=>{
    console.log(`app is litening to port ${PORT}`);
})

