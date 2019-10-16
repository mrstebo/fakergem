const data = require("../../data/matz.json");

module.exports = class Matz {

  /**
   *
   * @param {import("../faker")} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  quote() {
    return this.faker.Random.element(data["quotes"]);
  }

};
