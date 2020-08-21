// IMPORTS
const express = require('express'); 
const cors = require('cors'); 
const jwt = require('jsonwebtoken'); 
require('dotenv').config()

// const routes = require('./routes'); 
const port = process.env.PORT; 
const app = express(); 

// CORS 
app.use(cors({
    origin: [`http://localhost:3000`], 
    methods: 'GET,POST,PUT,DELETE', 
    optionsSuccessStatus: 200
})); 

// MIDDLEWARE
app.use(express.urlencoded({extended:false})); 
app.use(express.json()); 

// AUTH ROUTE


// CONNECTION
app.listen(port, () => console.log(`Server is listening on ${port}...`)); 