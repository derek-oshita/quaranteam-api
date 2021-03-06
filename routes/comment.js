// IMPORT for '/api/v1/comment'
const router = require('express').Router();
const ctrl = require('../controllers');
// const authRequired = require('../middleware/authRequired');

// ROUTES
router.get('/', ctrl.comment.index);
router.get('/:id', ctrl.comment.show);
router.post('/', ctrl.comment.create);
router.put('/:id', ctrl.comment.update);
router.delete('/:id', ctrl.comment.destroy);

// EXPORT
module.exports = router; 
