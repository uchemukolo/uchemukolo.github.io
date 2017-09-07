'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },      
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mealType: {
        type: Sequelize.ENUM,
        values: ['Appetizers & Snacks', 'Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Desserts'],
        allowNull: false
      },

      dishType: {
        type: Sequelize.ENUM,
        values: ['Soups and Stews', 'Salads', 'Breads', 'Cakes', 'Fruits', 'Smoothie', 'Wraps', 'Others'],
        allowNull: false
      },
         
      ingredients: {
        type: Sequelize.ENUM,
        values: ['Poultry', 'Pork', 'Dairy', 'Fish', 'Fruits', 'Grains', 'Vegetable', 'Pasta & Noodles', 'Seafoods', 'Meat', 'Others'],
        allowNull: false
      },
      preparations: {
        type: Sequelize.STRING,
        unique: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) =>{
    return queryInterface.dropTable('Recipes');
  }
};