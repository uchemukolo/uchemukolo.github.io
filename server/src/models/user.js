const Sequelize = require('../sequelize.js');


const Users = {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[a-z0-9\_\-]+$/i,
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  firstName: {
    type: Sequelize.STRING,
     },
  lastName: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  salt: {
    type: Sequelize.STRING
  }
}

const options = {
  freezeTableName: true
}

module.exports.Users = Users;
module.exports.options = options;