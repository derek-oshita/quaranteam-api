// IMPORTS
const express = require('express'); 
const cors = require('cors'); 
const jwt = require('jsonwebtoken'); 
const routes = require('./routes'); 
const port = process.env.PORT; 
const app = express(); 
require('dotenv').config();


// CORS 
app.use(cors({
    origin: '*', 
    methods: 'GET,POST,PUT,DELETE', 
    optionsSuccessStatus: 200
})); 
app.options('*', cors()); 

// MIDDLEWARE
app.use(express.urlencoded({extended:false})); 
app.use(express.json()); 

// HOME ROUTE   
app.get('/', (req, res) => {
    res.send('Quaranteam API...')
}); 

// STATE META ROUTE
app.use('/api/v1/meta', routes.meta); 

// AUTH ROUTE
app.use('/api/v1/auth', routes.auth); 

// COMMENT ROUTE
app.use('/api/v1/comment', routes.comment); 

// SERVER CONNECTION
app.listen(port || 4000, () => {
    console.log(`Server listening on: ${port}`)
}); 
