const data = require("../../data/lord-of-the-rings.json");

module.exports = class LordOfTheRings {
  constructor(faker) {
    this.faker = faker;
  }

  character() {
    return this.faker.Random.element(data["characters"]);
  }

  location() {
    return this.faker.Random.element(data["locations"]);
  }
};
