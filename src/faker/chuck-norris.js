const data = require("../../data/chuck-norris.json");

module.exports = class ChuckNorris {

  /**
   *
   * @param {import("../faker")} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  fact() {
    return this.faker.Random.element(data["facts"]);
  }

};
