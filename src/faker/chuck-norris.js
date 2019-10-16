const data = require("../../data/chuck-norris.json");

module.exports = class ChuckNorris {
  constructor(faker) {
    this.faker = faker;
  }

  fact() {
    return this.faker.Random.element(data["facts"]);
  }
};
