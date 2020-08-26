// IMPORTS
const mongoose = require('mongoose'); 

// STATE META SCHEMA 
const StateMetaSchema = mongoose.Schema({
    state: {
        type: String, 
        unique: true, 
    }, 
    code: {
        type: String, 
        unique: true, 
    }, 
    population: {
        type: Number, 
    }, 
    state_flag_url: {
        type: String, 
    }, 
    skyline_background_url: {
        type: String, 
    }, 
    capital_city: {
        type: String, 
    }, 
    nickname: {
        type: String, 
    }
}); 

// EXPORTS 
const StateMeta = mongoose.model('StateMeta', StateMetaSchema); 
module.exports = StateMeta; 