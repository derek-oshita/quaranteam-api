// IMPORTS
const db = require('../models'); 
const data = require('../stateMeta.json'); 

// STATEMETA CONTROLLER
const index = (req, res) => {
  db.StateMeta.find({}, (err, foundState) => {
    if (err) console.log('Error in games#index:', err);
    res.status(200).json(foundState);
  });
};

const show = (req, res) => {
  db.StateMeta.findById(req.params.id, (err, foundState) => {
    if (err) console.log('Error in games#show:', err);
    res.status(200).send(foundState);
  });
};

// EXPORTS
module.exports = {
    index,
    show,
};