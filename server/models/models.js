const UserMeta = require('./user.js');
const connection = require('../sequelize.js');

const User = connection.define('users', UserMeta.UserAtrr);

module.export = User;
