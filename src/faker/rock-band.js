const data = require("../../data/rock-band.json");

class RockBand {

  /**
   *
   * @param {import('../faker').Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data["names"]);
  }

}

module.exports = RockBand;
