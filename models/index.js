// IMPORTS
const mongoose = require('mongoose'); 
require('dotenv').config()

// MONGODB CONNECTION VARIABLES
const connectionString = process.env.MONGODB_URI; 
const configOptions = {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
}; 

mongoose.connect(process.env.MONGODB_URI, configOptions)
    .then(() => console.log('MONGODB successfully connected...'))
    .catch((err) => console.log(`MONGODB ERROR: ${err}`)); 

module.exports = {
    User: require('./User'), 
    Comment: require('./Comment'), 
    StateMeta: require('./StateMeta'), 
}; 
