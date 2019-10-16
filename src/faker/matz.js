const data = require("../../data/matz.json");

module.exports = class Matz {
  constructor(faker) {
    this.faker = faker;
  }

  quote() {
    return this.faker.Random.element(data["quotes"]);
  }
};
