// IMPORTS
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const db = require('../models'); 

// REGISTER CONTROLLER
const register = async (req, res) => {
    // sanity check 
    // console.log('register route success...'); 
    // return res.json({message: 'YOU DID IT.'})
    // Ensures fields exist
    if (!req.body.username || !req.body.email || !req.body.password) {
        return res.status(400).json({message: 'All fields are required.'}); 
    }; 
    // Ensures passwords meet min length
    if (req.body.password.length < 3) {
        return res.status(400).json({message: 'Password must be at least 3 characters long.'})
    }; 
    // Try..catch specifies a response if an exception is thrown. 
    try {
        // Check for a username duplicate. 
        const foundUser = await db.User.findOne({ username: req.body.username }); 
        // Return a message if that email is already in use. 
        if (foundUser) {
            res.status(400).json({
                status:400, 
                message: 'That email address already exists, please use another.'
            }); 
        }; 
        // Saltbae.
        const salt = await bcrypt.genSalt(10); 
        // Hash the password. 
        const hash = await bcrypt.hash(req.body.password, salt); 
        // Create user with the newly hashed password. 
        await db.User.create({ ...req.body, password: hash }); 

        // Success. 201: Resource created. 
        return res.status(201).json({status: 201, message: 'Registration complete!'})
    } catch (error) {
        console.log(error); 
        // 500: Internal server error. 
        return res.status(500).json({
            status: 500, 
            message: 'Error. Please try again.'
        }); 
    }; 
};

/* 
{
    "username": "chelsea",
    "email": "chelsea@example.com", 
    "password": "1234"
}
*/

// LOGIN CONTROLLER 
const login = async (req, res) => {
    // Sanity check. 
    // console.log(req.body); 
    // return res.json({message: 'Login working!'}); 
    try {
        // Find user by username. 
        const foundUser = await db.User.findOne({ username: req.body.username }); 
        if (!foundUser) {
            return res.status(400).json({
                status:400, 
                message: 'Username or password did not match.'
            });
        }; 
        // Verify password.
        const isMatch = await bcrypt.compare(req.body.password, foundUser.password); 
        if (!isMatch) {
            return res.status(400).json({
                status: 400, 
                message: 'Username or password did not match.'
            }); 
        }; 
        // Payload. 
        const payload = {
            id: foundUser._id, 
            username: foundUser.username
        }; 
        const secret = process.env.JWT_SECRET; 
        const expiration = {expiresIn: '1 days'}; 
        // Signature. 
        const token = await jwt.sign(payload, secret, expiration); 
        // Success. 
        res.status(200).json({token}); 
    // Error. 
    } catch (error) {
        console.log(error); 
        return res.status(500).json({
            status: 500, 
            message: 'Error. Please try again.', 
        }); 
    }; 
};

// VERIFY (ENSURE THERE IS A TOKEN)
const verify = async (req, res) => {
    // Get da token. 
    const token = req.headers['authorization']; 
    console.log(req.headers);
    console.log('Confirm token: ', token); 
    // Verify. 
    await jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err || !decodedUser) {
            // 401: unauthorized
            return res.status(401).json({
                message: 'You are not authorized, please try again.'
            }); 
        };
        // Add the payload to the request obj.             
        req.currentUser = decodedUser;
        // Success, eh? 
        res.status(200).json({user: decodedUser});  
    });
};

// EXPORTS 
module.exports = {
    register, 
    login,
    verify, 
}; 
