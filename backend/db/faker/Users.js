const { faker } = require("@faker-js/faker");
const bcrypt = require("bcryptjs");

// const randomNumber = num => Math.floor(Math.random) * Math.floor(num) +

// fakeDate();

const seedUsers = (num) => {
  let i = 0;

  while (i < num) {
    const user = {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      hashedPassword: bcrypt.hashSync(faker.internet.password()),
      bio: faker.lorem.sentence(),
    };
    console.log(user, ",");
    i++;
  }
};

seedUsers(50);

// SONG SEEDS
