const data = require("../../data/university.json");

module.exports =  class University {
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data["names"]);
  }
};
