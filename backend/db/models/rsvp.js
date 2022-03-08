("use strict");
module.exports = (sequelize, DataTypes) => {
  const Rsvp = sequelize.define(
    "Rsvp",
    {
      eventId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  Rsvp.associate = function (models) {
    Rsvp.belongsTo(models.Event, {
      foreignKey: "eventId",
    });
    Rsvp.belongsTo(models.User, {
      foreignKey: "userId",
    });
    // associations can be defined here
  };

  return Rsvp;
};
