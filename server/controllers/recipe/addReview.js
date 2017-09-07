const addReview = (req, res, next) => {
	console.log(req.body);
	next();

const Recipe = require('../models').Recipe;

  module.exports = {
  create(req, res) {
    return Recipe
      .create({
        comments: req.body.comments,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
}; 
}

module.exports = addReview;
