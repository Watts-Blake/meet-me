"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hostId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      venueId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Venues" },
      },
      typeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Types" },
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      date: {
        type: Sequelize.DATE,
      },
      image: {
        type: Sequelize.STRING(1000),
      },
      capacity: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable("Events");
  },
};
