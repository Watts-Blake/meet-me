"use strict";
module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define(
    "Venue",
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      zipCode: {
        allowNull: false,
        type: DataTypes.STRING(10),
      },
      lat: {
        type: DataTypes.DECIMAL(7, 4),
      },
      long: {
        type: DataTypes.DECIMAL(7, 4),
      },
    },
    {}
  );
  Venue.associate = function (models) {
    Venue.hasMany(models.Event, { foreignKey: "venueId" });
    // associations can be defined here
  };

  Venue.getVenueById = async function (id) {
    return await Venue.findByPk(id);
  };

  Venue.getAllVenues = async function () {
    return await Venue.findAll();
  };

  return Venue;
};
