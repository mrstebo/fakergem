const data = require("../../data/zelda.json");

module.exports = class Zelda {
  constructor(faker) {
    this.faker = faker;
  }

  game() {
    return this.faker.Random.element(data["games"]);
  }

  character() {
    return this.faker.Random.element(data["characters"]);
  }

  location() {
    return this.faker.Random.element(data["locations"]);
  }
};
