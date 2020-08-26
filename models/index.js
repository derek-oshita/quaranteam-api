// IMPORTS
const mongoose = require('mongoose'); 

// TROUBLESHOOTING LOG
console.log('MONGO DB = ', process.env.MONGODB_URI); 

// MONGODB CONNECTION VARIABLES
const connectionString = process.env.MONGODB_URI; 
const configOptions = {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
}; 

mongoose.connect(connectionString, configOptions)
    .then(() => console.log('MONGODB successfully connected...'))
    .catch((err) => console.log(`MONGODB ERROR: ${err}`)); 

module.exports = {
    User: require('./User'), 
    Comment: require('./Comment'), 
    StateMeta: require('./StateMeta'), 
}; 
