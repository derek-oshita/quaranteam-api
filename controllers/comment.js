// IMPORTS 
const db = require('../models');

// COMMENT CONTROLLER
const index = (req, res) => {
  db.Comment.find({}, (err, foundComments) => {
    if (err) console.log('Error in Comment#index:', err);
    res.status(200).json(foundComments);
  });
};

const show = (req, res) => {
  db.Comment.findById(req.params.id, (err, foundComment) => {
    if (err) console.log('Error in Comment#show:', err);
    res.status(200).send(foundComment);
  });
};

// const show = (req, res) => {
//   db.Comment.findById(req.params.id)
//     .populate('userId')
//     .exec((err, comment) => {
//       console.log(comment)
//       if (err) console.log(err)
//       res.status(200).send(comment)
//   })
// } 


const create = (req, res) => {
    db.Comment.create(req.body, (err, savedComment) => {
    if (err) console.log('Error in Comment#create:', err);
    res.status(200).json(savedComment);
  });
};

const update = (req, res) => {
  db.Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedComment) => {
    if (err) console.log('Error in Comment#update:', err);
    if (!updatedComment) {
      res.status(400).json({message: `Could not find Commentwith id ${req.params.id}`});
    }
    res.json(updatedComment);
  });
};

const destroy = (req, res) => {
  db.Comment.findByIdAndDelete(req.params.id, (err, deletedComment) => {
    if (err) console.log('Error in Comment#destroy:', err);
    res.status(200).json(deletedComment);
  });
};

// EXPORTS
module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
