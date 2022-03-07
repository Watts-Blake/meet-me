"use strict";
module.exports = (sequelize, DataTypes) => {
  const GroupMember = sequelize.define(
    "GroupMember",
    {
      groupId: {
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
  GroupMember.associate = function (models) {
    GroupMember.belongsTo(models.Group, { foreignKey: "groupId" });
    GroupMember.belongsTo(models.User, { foreignKey: "userId" });
    // associations can be defined here
  };
  return GroupMember;
};
