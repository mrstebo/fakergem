const data = require("../../data/twin-peaks.json");

module.exports = class TwinPeaks {

  /**
   *
   * @param {import("../faker")} faker
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

};
