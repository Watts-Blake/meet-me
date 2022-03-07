"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Groups", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      typeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Types" },
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      details: {
        allowNull: false,
        type: Sequelize.TEXT(500),
      },
      image: {
        type: Sequelize.STRING(1000),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Groups");
  },
};
