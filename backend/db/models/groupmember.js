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
  GroupMember.getGroupMemberById = async function (id) {
    return await GroupMember.findByPk(id);
  };

  GroupMember.getAllGroupMembers = async function (id) {
    return await GroupMember.findAll({
      where: { groupId: id },
      include: {
        model: User,
      },
    });
  };
  return GroupMember;
};
