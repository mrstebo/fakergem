const data = require("../../data/superhero.json");

class Superhero {

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
    return this.faker.Random.element(data["names"])
      .replace("{prefix}", this.faker.Random.element(data["prefixes"]))
      .replace("{suffix}", this.faker.Random.element(data["suffixes"]))
      .replace("{descriptor}", this.faker.Random.element(data["descriptors"]));
  }

  /**
   * @returns {string}
   */
  power() {
    return this.faker.Random.element(data["powers"]);
  }

  /**
   * @returns {string}
   */
  prefix() {
    return this.faker.Random.element(data["prefixes"]);
  }

  /**
   * @returns {string}
   */
  suffix() {
    return this.faker.Random.element(data["suffixes"]);
  }

  /**
   * @returns {string}
   */
  descriptor() {
    return this.faker.Random.element(data["descriptors"]);
  }

}

module.exports = Superhero;
