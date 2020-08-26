// IMPORTS
const jwt = require('jsonwebtoken'); 
require('dotenv').config()

// AUTH REQUIRED
const authRequired = async (req, res, next) => {
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
        // Pass it off.  
        next(); 
    });
}; 

// EXPORTS
module.exports = authRequired; 