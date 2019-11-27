const data = require("../../data/lord-of-the-rings.json");

class LordOfTheRings {

  /**
   *
   * @param {Faker} faker
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

}

module.exports = LordOfTheRings;
