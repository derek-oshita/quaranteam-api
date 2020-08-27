// IMPORTS
const mongoose = require('mongoose'); 

// COMMENT SCHEMA
const commentSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true, 
    }, 
    body: {
        type: String, 
        required: true, 
    }, 
    createdAt: {
        type: Date, 
        default: Date.now, 
    }, 
    userId: {    
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'UserID', 
    }, 
    stateId: {
        type: String, 
    }
}); 

// EXPORTS
const Comment = mongoose.model('Comment', commentSchema); 
module.exports = Comment; 