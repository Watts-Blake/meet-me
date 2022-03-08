"use strict";
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "Event",
    {
      hostId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      venueId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      typeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      date: {
        type: DataTypes.DATE,
      },
      image: {
        type: DataTypes.STRING(1000),
      },
      capacity: {
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  Event.associate = function (models) {
    Event.belongsTo(models.User, { foreignKey: "hostId" });
    Event.belongsTo(models.Type, { foreignKey: "typeId" });
    Event.hasMany(models.Rsvp, {
      foreignKey: "eventId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Event.belongsTo(models.Venue, { foreignKey: "venueId" });
    // associations can be defined here
  };

  return Event;
};
