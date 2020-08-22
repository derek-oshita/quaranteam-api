// IMPORTS
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const db = require('../models'); 

// REGISTER CONTROLLER
const register = async (req, res) => {
    // Ensures fields exist
    if (!req.body.username || !req.body.email || !req.body.password) {
        return res.status(400).json({message: 'All fields are required.'}); 
    }
    // Ensures passwords meet min length
    if (req.body.password.length < 3) {
        return res.status(400).json({message: 'Password must be at least 3 characters long.'})
    }
    // Try..catch specifies a response if an exception is thrown. 
    try {
        // Check for an email duplicate. 
        const foundUser = await db.User.findOne({ email: req.body.email }); 
        // Return a message if that email is already in use. 
        if (foundUser) {
            res.status(400).json({
                status:400, 
                message: 'That email address already exists, please use another.'
            })
        }
        // Saltbae.
        const salt = await bcrypt.genSalt(10); 
        // Hash the password. 
        const hash = await bcrypt.hash(req.body.password, salt); 
        // Create user with the newly hashed password. 
        await db.User.create({ ... req.body, password: hash }); 

        // Success. 201: Resource created. 
        return res.status(201).json({status: 201, message: 'Registration complete!'})
    } catch (error) {
        console.log(error); 
        // 500: Internal server error. 
        return res.status(500).json({
            status: 500, 
            message: 'Server error. Please try again.'
        }); 
    }; 
};

// EXPORTS 
module.exports = {
    register, 
}; 
