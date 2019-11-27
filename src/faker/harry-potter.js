const data = require("../../data/harry-potter.json");

class HarryPotter {

  /**
   *
   * @param {import('../faker').Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  /**
   * @returns {string}
   */
  character() {
    return this.faker.Random.element(data["characters"]);
  }

  /**
   * @returns {string}
   */
  location() {
    return this.faker.Random.element(data["locations"]);
  }

  /**
   * @returns {string}
   */
  quote() {
    return this.faker.Random.element(data["quotes"]);
  }

  /**
   * @returns {string}
   */
  book() {
    return this.faker.Random.element(data["books"]);
  }

}

module.exports = HarryPotter;
