'use strict'

const Sequelize = require('../sequelize.js');


const UserAtrr = {
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
    unique: true,
    
    validate: {
      isEmail: true
    }
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
     },

     lastName: {
    type: Sequelize.STRING,
    allowNull: false
     },
     
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  salt: {
    type: Sequelize.STRING
  }
}


module.exports.Users = UserAtrr;