// IMPORTS
const express = require('express'); 
const cors = require('cors'); 
const jwt = require('jsonwebtoken'); 
const routes = require('./routes'); 
const port = process.env.PORT; 
const app = express(); 
require('dotenv').config()
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
app.use('/api/v1/meta', routes.meta); 

// AUTH ROUTE
app.use('/api/v1/auth', routes.auth); 

// COMMENT ROUTE
app.use('/api/v1/comment', routes.comment); 


// CONNECTION
app.listen(port || 4000); 