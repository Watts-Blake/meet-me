"use strict";
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define(
    "Type",
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Type.associate = function (models) {
    // associations can be defined here
    Type.hasMany(models.Event, { foreignKey: "typeId" });
    Type.hasMany(models.Group, { foreignKey: "typeId" });
  };
  Type.getTypeById = async function (id) {
    return await Type.findByPk(id);
  };
  return Type;
};
