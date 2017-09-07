'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  description: {
    type: DataTypes.STRING,
    unique: false,
  },
  mealType: {
    type: DataTypes.ENUM,
    values: ['Appetizers & Snacks', 'Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Desserts'],
    allowNull: false
  },
  dishType: {
    type: DataTypes.ENUM,
    values: ['Soups & Stews', 'Salads', 'Breads', 'Cakes', 'Fruits', 'Smoothie', 'Wraps', 'Others'],
    allowNull: false
  },
  ingredients: {
    type: DataTypes.ENUM,
    values: ['Poultry', 'Pork', 'Dairy', 'Fish', 'Fruits', 'Grains', 'Vegetable', 'Pasta & Noodles', 'Seafoods', 'Meat', 'Others'],
    allowNull: false,
  },
  preparations: {
    type: DataTypes.TEXT,
    unique: false,
  }
   }
  )
 return Recipe;
};