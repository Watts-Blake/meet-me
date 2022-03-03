"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@meetme.com",
          username: "Demo-User",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "demo2@meetme.com",
          username: "Demo-User-2",
          hashedPassword: bcrypt.hashSync("password2"),
        },
        {
          email: "demo3@meetme.com",
          username: "Demo-User-3",
          hashedPassword: bcrypt.hashSync("password3"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["Demo-User", "Demo-User-2", "Demo-User-3"] },
      },
      {}
    );
  },
};
