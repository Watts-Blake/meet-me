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
  Group.getGroupById = async function (id) {
    return await Group.findByPk(id);
  };

  Group.getGroupMemberById = async function (id) {
    return await models.GroupMember.findByPk(id);
  };

  Group.getAllGroupMembers = async function (id) {
    return await models.GroupMember.findAll({
      include: {
        model: models.GroupMember,
        where: { groupId: id },
      },
    });
  };

  return Group;
};
