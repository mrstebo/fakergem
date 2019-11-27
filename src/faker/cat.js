const data = require("../../data/cat.json");

class Cat {

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
  name() {
    return this.faker.Random.element(data["names"]);
  }

  /**
   * @returns {string}
   */
  breed() {
    return this.faker.Random.element(data["breeds"]);
  }

  /**
   * @returns {string}
   */
  registry() {
    return this.faker.Random.element(data["registries"]);
  }

}

module.exports = Cat;
