const { faker } = require("@faker-js/faker");

// const randomNumber = num => Math.floor(Math.random) * Math.floor(num) +

const imgs = [];

const imgPicker = (i, imgs) => {
  let imgAt = i % imgs.length;
  return imgs[imgAt];
};

const fakeDate = () => {
  const date = faker.date.future();

  return date;
};

function round(num) {
  if (num < 100) {
    return Math.round(num / 5) * 5;
  }
  if (num > 100 && num < 1000) return Math.round(num / 50) * 50;
}

// fakeDate();

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const seedEvents = (num) => {
  let i = 0;

  while (i < num) {
    const user = {
      hostId: random(4, 50),
      venueId: random(1, 40),
      typeId: random(1, 30),
      name: faker.company.catchPhrase(),
      date: fakeDate().toDateString(),
      capacity: round(random(1, 1000)),
    };
    console.log(user, ",");
    i++;
  }
};

seedEvents(50);
