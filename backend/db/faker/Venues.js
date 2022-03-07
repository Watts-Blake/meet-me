const { faker } = require("@faker-js/faker");

// const randomNumber = num => Math.floor(Math.random) * Math.floor(num) +

const imgs = [];

const imgPicker = (i, imgs) => {
  let imgAt = i % imgs.length;
  return imgs[imgAt];
};

const fakeDate = () => {
  const date = faker.date.forward(175);

  return `${date}`;
};

// fakeDate();

const seedVenues = (num) => {
  let i = 0;

  while (i < num) {
    const user = {
      name: faker.company.companyName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
    };
    console.log(user, ",");
    i++;
  }
};

seedVenues(40);
