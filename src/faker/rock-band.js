const data = require("../../data/rock-band.json");

module.exports =  class RockBand {
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data["names"]);
  }
};
