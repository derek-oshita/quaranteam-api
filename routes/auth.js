// IMPORTS for '/api/v1/auth'
const router = require('express').Router(); 
const ctrl = require('../controllers');

// ROUTES
router.post('/register', ctrl.auth.register); 
router.post('/login', ctrl.auth.login); 
router.get('/verify', ctrl.auth.verify); 
router.get('/getuser/:id', ctrl.auth.getUser); 

// EXPORTS
module.exports = router; 