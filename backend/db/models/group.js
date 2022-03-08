"use strict";
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define(
    "Group",
    {
      ownerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      typeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      details: {
        allowNull: false,
        type: DataTypes.TEXT(500),
      },
      image: {
        type: DataTypes.STRING(1000),
      },
    },
    {}
  );
  Group.associate = function (models) {
    Group.belongsTo(models.User, { foreignKey: "ownerId" });
    Group.belongsTo(models.Type, { foreignKey: "typeId" });
    // associations can be defined here
  };

  return Group;
};
