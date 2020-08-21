// IMPORTS
const jwt = require('jsonwebtoken'); 

// AUTH REQUIRED
const authRequired = (req, res, next) => {
    const token = req.headers['authorization']; 
    console.log(req.headers)
    console.log('Verify token ===> ', token); 

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err || !decodedUser) {
            return res.status(401).json({
                message: 'Not authorized. Try again...'
            }); 
        }
        req.currentUser = decodedUser; 
        next(); 
    })
}

// EXPORTS
module.exports = authRequired; 