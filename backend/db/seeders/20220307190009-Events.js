"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Events",
      [
        {
          hostId: 22,
          venueId: 23,
          typeId: 17,
          name: "Re-engineered intangible system engine",
          date: "Wed Jan 04 2023 04:16:22 GMT-0700 (Pacific Daylight Time)'",
          capacity: 500,
        },
        {
          hostId: 30,
          venueId: 18,
          typeId: 1,
          name: "Up-sized grid-enabled system engine",
          date: "Sun Jun 19 2022",
          capacity: 550,
        },
        {
          hostId: 22,
          venueId: 7,
          typeId: 21,
          name: "Multi-tiered value-added definition",
          date: "Sun Jan 08 2023",
          capacity: 650,
        },
        {
          hostId: 45,
          venueId: 15,
          typeId: 12,
          name: "Synergistic fresh-thinking open system",
          date: "Wed Oct 19 2022",
          capacity: 950,
        },
        {
          hostId: 43,
          venueId: 34,
          typeId: 26,
          name: "Multi-tiered real-time solution",
          date: "Mon Sep 19 2022",
          capacity: 550,
        },
        {
          hostId: 14,
          venueId: 6,
          typeId: 5,
          name: "Inverse dedicated migration",
          date: "Thu Oct 06 2022",
          capacity: 950,
        },
        {
          hostId: 19,
          venueId: 13,
          typeId: 7,
          name: "Open-source exuding process improvement",
          date: "Sat Feb 11 2023",
          capacity: 800,
        },
        {
          hostId: 13,
          venueId: 10,
          typeId: 22,
          name: "Proactive incremental productivity",
          date: "Fri May 06 2022",
          capacity: 800,
        },
        {
          hostId: 25,
          venueId: 22,
          typeId: 5,
          name: "Balanced analyzing matrix",
          date: "Mon Oct 03 2022",
          capacity: 950,
        },
        {
          hostId: 43,
          venueId: 8,
          typeId: 20,
          name: "Enhanced 5th generation toolset",
          date: "Mon Dec 26 2022",
          capacity: 85,
        },
        {
          hostId: 47,
          venueId: 16,
          typeId: 25,
          name: "Cross-group leading edge leverage",
          date: "Tue Apr 05 2022",
          capacity: 55,
        },
        {
          hostId: 4,
          venueId: 33,
          typeId: 29,
          name: "Cloned 24/7 functionalities",
          date: "Thu Jan 19 2023",
          capacity: 550,
        },
        {
          hostId: 14,
          venueId: 10,
          typeId: 14,
          name: "Phased real-time open architecture",
          date: "Wed Oct 12 2022",
          capacity: 350,
        },
        {
          hostId: 16,
          venueId: 4,
          typeId: 20,
          name: "Self-enabling attitude-oriented projection",
          date: "Sun Jul 24 2022",
          capacity: 750,
        },
        {
          hostId: 14,
          venueId: 28,
          typeId: 11,
          name: "Extended optimizing projection",
          date: "Thu May 26 2022",
          capacity: 650,
        },
        {
          hostId: 29,
          venueId: 25,
          typeId: 18,
          name: "Cloned multimedia encryption",
          date: "Tue Jan 17 2023",
          capacity: 650,
        },
        {
          hostId: 19,
          venueId: 34,
          typeId: 11,
          name: "Up-sized zero defect firmware",
          date: "Mon Jan 16 2023",
          capacity: 450,
        },
        {
          hostId: 37,
          venueId: 3,
          typeId: 15,
          name: "Triple-buffered fault-tolerant adapter",
          date: "Mon Nov 28 2022",
          capacity: 60,
        },
        {
          hostId: 23,
          venueId: 38,
          typeId: 9,
          name: "Multi-layered non-volatile hardware",
          date: "Fri Jan 20 2023",
          capacity: 400,
        },
        {
          hostId: 22,
          venueId: 7,
          typeId: 8,
          name: "Universal 24/7 core",
          date: "Sun Sep 04 2022",
          capacity: 150,
        },
        {
          hostId: 40,
          venueId: 31,
          typeId: 23,
          name: "Intuitive uniform artificial intelligence",
          date: "Fri Apr 15 2022",
          capacity: 850,
        },
        {
          hostId: 43,
          venueId: 34,
          typeId: 5,
          name: "Synergistic radical structure",
          date: "Wed Dec 21 2022",
          capacity: 500,
        },
        {
          hostId: 17,
          venueId: 28,
          typeId: 18,
          name: "Reduced analyzing benchmark",
          date: "Tue Jun 07 2022",
          capacity: 650,
        },
        {
          hostId: 4,
          venueId: 25,
          typeId: 21,
          name: "Streamlined maximized capacity",
          date: "Sat Jul 30 2022",
          capacity: 300,
        },
        {
          hostId: 24,
          venueId: 24,
          typeId: 19,
          name: "Front-line solution-oriented collaboration",
          date: "Thu Sep 22 2022",
          capacity: 200,
        },
        {
          hostId: 48,
          venueId: 2,
          typeId: 10,
          name: "De-engineered bi-directional implementation",
          date: "Sun Jan 15 2023",
          capacity: 600,
        },
        {
          hostId: 42,
          venueId: 17,
          typeId: 25,
          name: "Face to face full-range neural-net",
          date: "Wed Sep 21 2022",
          capacity: 750,
        },
        {
          hostId: 29,
          venueId: 25,
          typeId: 26,
          name: "Devolved systemic productivity",
          date: "Sat Jun 18 2022",
          capacity: 30,
        },
        {
          hostId: 5,
          venueId: 35,
          typeId: 4,
          name: "Horizontal mission-critical groupware",
          date: "Thu Apr 14 2022",
          capacity: 450,
        },
        {
          hostId: 43,
          venueId: 16,
          typeId: 25,
          name: "Expanded full-range monitoring",
          date: "Tue Jun 14 2022",
          capacity: 150,
        },
        {
          hostId: 40,
          venueId: 34,
          typeId: 3,
          name: "Fully-configurable next generation core",
          date: "Thu Jun 09 2022",
          capacity: 1000,
        },
        {
          hostId: 30,
          venueId: 19,
          typeId: 29,
          name: "Compatible 4th generation structure",
          date: "Mon Sep 26 2022",
          capacity: 300,
        },
        {
          hostId: 49,
          venueId: 1,
          typeId: 4,
          name: "Re-contextualized empowering data-warehouse",
          date: "Tue Apr 19 2022",
          capacity: 400,
        },
        {
          hostId: 4,
          venueId: 28,
          typeId: 20,
          name: "Cloned systematic website",
          date: "Sat Sep 17 2022",
          capacity: 450,
        },
        {
          hostId: 33,
          venueId: 36,
          typeId: 6,
          name: "Adaptive radical knowledge base",
          date: "Tue May 17 2022",
          capacity: 200,
        },
        {
          hostId: 26,
          venueId: 26,
          typeId: 20,
          name: "Devolved encompassing core",
          date: "Tue Oct 18 2022",
          capacity: 550,
        },
        {
          hostId: 39,
          venueId: 7,
          typeId: 2,
          name: "Innovative bottom-line Graphical User Interface",
          date: "Fri Aug 19 2022",
          capacity: 850,
        },
        {
          hostId: 4,
          venueId: 32,
          typeId: 27,
          name: "Re-engineered client-driven secured line",
          date: "Sun Mar 27 2022",
          capacity: 600,
        },
        {
          hostId: 28,
          venueId: 22,
          typeId: 25,
          name: "Organic clear-thinking flexibility",
          date: "Tue Sep 06 2022",
          capacity: 250,
        },
        {
          hostId: 16,
          venueId: 25,
          typeId: 2,
          name: "Multi-layered motivating projection",
          date: "Thu Sep 15 2022",
          capacity: 400,
        },
        {
          hostId: 5,
          venueId: 23,
          typeId: 25,
          name: "Polarised responsive artificial intelligence",
          date: "Thu Sep 22 2022",
          capacity: 250,
        },
        {
          hostId: 16,
          venueId: 4,
          typeId: 4,
          name: "Organic mobile support",
          date: "Sat Oct 01 2022",
          capacity: 950,
        },
        {
          hostId: 8,
          venueId: 17,
          typeId: 9,
          name: "Intuitive stable hierarchy",
          date: "Tue Jul 12 2022",
          capacity: 950,
        },
        {
          hostId: 34,
          venueId: 36,
          typeId: 23,
          name: "Ameliorated encompassing contingency",
          date: "Sat Aug 27 2022",
          capacity: 100,
        },
        {
          hostId: 38,
          venueId: 38,
          typeId: 14,
          name: "Streamlined global Graphic Interface",
          date: "Thu Feb 02 2023",
          capacity: 550,
        },
        {
          hostId: 25,
          venueId: 28,
          typeId: 10,
          name: "Grass-roots intermediate moratorium",
          date: "Mon Dec 12 2022",
          capacity: 150,
        },
        {
          hostId: 4,
          venueId: 38,
          typeId: 5,
          name: "Optional responsive strategy",
          date: "Fri Dec 30 2022",
          capacity: 750,
        },
        {
          hostId: 30,
          venueId: 34,
          typeId: 23,
          name: "Multi-channelled static service-desk",
          date: "Thu Jun 23 2022",
          capacity: 400,
        },
        {
          hostId: 32,
          venueId: 4,
          typeId: 11,
          name: "Self-enabling global challenge",
          date: "Mon Apr 18 2022",
          capacity: 550,
        },
        {
          hostId: 10,
          venueId: 23,
          typeId: 23,
          name: "Monitored foreground function",
          date: "Wed Apr 13 2022",
          capacity: 750,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */ return queryInterface.bulkDelete("Events", null, {});
  },
};
