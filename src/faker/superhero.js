const data = require("../../data/superhero.json");

module.exports = class Superhero {

  /**
   *
   * @param {import("../faker")} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data["names"])
      .replace("{prefix}", this.faker.Random.element(data["prefixes"]))
      .replace("{suffix}", this.faker.Random.element(data["suffixes"]))
      .replace("{descriptor}", this.faker.Random.element(data["descriptors"]));
  }

  power() {
    return this.faker.Random.element(data["powers"]);
  }

  prefix() {
    return this.faker.Random.element(data["prefixes"]);
  }

  suffix() {
    return this.faker.Random.element(data["suffixes"]);
  }

  descriptor() {
    return this.faker.Random.element(data["descriptors"]);
  }

};
