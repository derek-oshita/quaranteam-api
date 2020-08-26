// IMPORTS
const express = require('express'); 
const cors = require('cors'); 
const jwt = require('jsonwebtoken'); 
require('dotenv').config()
const routes = require('./routes'); 
const port = process.env.PORT; 
const app = express(); 
const authRequired = require('./middleware/authRequired'); 


// CORS 
app.use(cors({
    origin: [`http://localhost:4000`], 
    methods: 'GET,POST,PUT,DELETE', 
    optionsSuccessStatus: 200
})); 

// MIDDLEWARE
app.use(express.urlencoded({extended:false})); 
app.use(express.json()); 

// STATE META ROUTE
app.use('/api/v1/meta', routes.stateMeta); 

// AUTH ROUTE
app.use('/api/v1/auth', routes.auth); 


// CONNECTION
app.listen(port, () => console.log(`Server is listening on ${port}...`)); 