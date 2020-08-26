// IMPORTS
const db = require('../models'); 

// STATEMETA CONTROLLER

// INDEX
const index = (req, res) => {
  db.StateMeta.find({}, (err, foundStates) => {
    if (err) console.log('Error in statemeta#index:', err);
    res.status(200).json(foundStates);
  });
};
//SHOW
const show = (req, res) => {
  db.StateMeta.findById(req.params.id, (err, foundState) => {
    if (err) console.log('Error in statemeta#show:', err);
    res.status(200).send(foundState);
  });
};

// EXPORTS
module.exports = {
    index,
    show,
};