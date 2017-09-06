const signup = (req, res, next) => {
	console.log(req.body);
	next();

const Userdata = require('../models').User;

  module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username, 
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
}; 
}

module.exports = signup;

