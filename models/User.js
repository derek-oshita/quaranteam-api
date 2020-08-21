// IMPORTS
const mongoose = require('mongoose'); 

// USER SCHEMA
const userSchema = mongoose.Schema({
    username: {
        type: String, 
        unique: true, 
        required: [true, 'Username is a required field.'], 
    }, 
    email: {
        type: String, 
        unique: true, 
        required: [true, 'Email is a required field.']
    }, 
    password: {
        type: String, 
        minlength: 3, 
        required: [true, 'Password is a required field.'], 
    }, 
    name: {
        type: String, 
    }, 
    imgUrl: {
        type: String, 
    }, 
    comment: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment'
    }]
}); 

// EXPORTS 
const User = mongoose.model('User', userSchema); 
module.exports = User; 