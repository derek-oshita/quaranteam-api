// IMPORTS for '/api/v1/meta'
const router = require('express').Router(); 
const ctrl = require('../controllers'); 

// Routes 
router.get('/', ctrl.stateMeta.index); 
router.get('/:id', ctrl.stateMeta.show);

// EXPORT
module.exports = router; 