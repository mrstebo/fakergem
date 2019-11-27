const data = require("../../data/twin-peaks.json");

class TwinPeaks {

  /**
   *
   * @param {import('../faker').Faker} faker
   */
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

}

module.exports = TwinPeaks;
