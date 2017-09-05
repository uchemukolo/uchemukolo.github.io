'use strict'

const Sequelize = require('../sequelize.js');


const Recipe = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
    }
  },
  description: {
    type: Sequelize.STRING,
    unique: false,    
    }
  },
  mealType {
    type: Sequelize.ENUM,
    values: ['Appetizers & Snacks', 'Breakfast', 'Lunch''Dinner', 'Drinks''Desserts']
    allowNull: false
     },

  dishType: {
    type: Sequelize.ENUM,
    values: ['Soups and Stews', 'Salads', 'Breads', 'Cakes', 'Fruits', 'Smoothie', 'Wraps', 'Others']
    allowNull: false
     },
     
  ingredients: {
    type: Sequelize.ENUM,
    values: ['Poultry', 'Pork', 'Dairy', 'Fish', 'Fruits', 'Grains', 'Vegetable', 'Pasta & Noodles', 'Seafoods', 'Meat', 'Others']
    allowNull: false
  },
  preparations: {
    type: Sequelize.STRING
    unique: false,
  }
}


module.exports = Recipe;