"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Types",
      [
        { name: "Bar Crawls" },
        { name: "Gaming" },
        { name: "Coding" },
        { name: "Movies" },
        { name: "Board Games" },
        { name: "Hunting" },
        { name: "Archery" },
        { name: "Chess" },
        { name: "Music" },
        { name: "Festivals" },
        { name: "Cars" },
        { name: "Hiking" },
        { name: "Barbeque" },
        { name: "Cooking" },
        { name: "Study Group" },
        { name: "Books" },
        { name: "Astrology" },
        { name: "Animals" },
        { name: "Knitting" },
        { name: "Sports" },
        { name: "Fitness" },
        { name: "Spiritual" },
        { name: "Poetry" },
        { name: "Food" },
        { name: "Dating" },
        { name: "Outdoors" },
        { name: "DYI" },
        { name: "Building" },
        { name: "Self Care" },
        { name: "Party" },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Types", null, {});
  },
};
