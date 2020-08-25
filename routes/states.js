// IMPORTS 
const router = require('express').Router(); 
const ctrl = require('../controllers/states'); 
const authRequired = require('../middleware/authRequired'); 

// Routes 
router.get('/', ctrl.states.index); 

// EXPORT
module.exports = router; 