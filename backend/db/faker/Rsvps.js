const { faker } = require("@faker-js/faker");

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const seedRsvps = (num) => {
  let i = 0;
  const set1 = new Set();
  while (i < num) {
    const user = {
      eventId: random(1, 50),
      userId: random(4, 50),
    };
    if (!set1.has(user)) {
      set1.add(user);
      console.log(user, ",");
      i++;
    }
  }
};

seedRsvps(500);
