// IMPORTS 
const router = require('express').Router(); 
const ctrl = require('../controllers/events'); 
const authRequired = require('../middleware/authRequired'); 

// Routes 
router.get('/', ctrl.events.index); 

// EXPORT
module.exports = router; 