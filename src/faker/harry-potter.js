const data = require("../../data/harry-potter.json");

module.exports = class HarryPotter {
  constructor(faker) {
    this.faker = faker;
  }

  character() {
    return this.faker.Random.element(data["characters"]);
  }

  location() {
    return this.faker.Random.element(data["locations"]);
  }

  quote() {
    return this.faker.Random.element(data["quotes"]);
  }

  book() {
    return this.faker.Random.element(data["books"]);
  }
};
