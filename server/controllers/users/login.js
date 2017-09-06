// const login = (req, res, next) => {
//   console.log(req.body);
//   next();

const Userdata = require('../models').User;











































































































  module.exports = {
  login(req, res) {
    return User
      .findOne({
        username: req.body.username, 
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
}; 
}

module.exports = login;
