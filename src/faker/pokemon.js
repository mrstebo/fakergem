const data = require("../../data/pokemon.json");

module.exports = class Pokemon {

  /**
   *
   * @param {import("../faker")} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data["names"]);
  }

  location() {
    return this.faker.Random.element(data["locations"]);
  }

};
