'use strict';
module.exports = function(sequelize, DataTypes) {
  var Favourites = sequelize.define('Favourites', {
    favourites: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Favourites;
};