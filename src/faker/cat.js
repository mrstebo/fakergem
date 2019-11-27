const data = require("../../data/cat.json");

class Cat {

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

  breed() {
    return this.faker.Random.element(data["breeds"]);
  }

  registry() {
    return this.faker.Random.element(data["registries"]);
  }

}

module.exports = Cat;
