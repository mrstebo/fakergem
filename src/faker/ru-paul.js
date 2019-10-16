const data = require("../../data/ru-paul.json");

module.exports = class RuPaul {
  constructor(faker) {
    this.faker = faker;
  }

  quote() {
    return this.faker.Random.element(data["quotes"]);
  }
};
