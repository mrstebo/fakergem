const data = require("../../data/ru-paul.json");

module.exports = class RuPaul {

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
