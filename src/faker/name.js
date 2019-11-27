const data = require("../../data/name.json");

class Name {

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
    return [
      this.firstName(),
      this.lastName(),
    ].join(" ");
  }

  /**
   * @returns {string}
   */
  nameWithMiddle() {
    return [
      this.firstName(),
      this.firstName(),
      this.lastName(),
    ].join(" ");
  }

  /**
   * @returns {string}
   */
  firstName() {
    return this.faker.Random.element(data["firstNames"]);
  }

  /**
   * @returns {string}
   */
  lastName() {
    return this.faker.Random.element(data["lastNames"]);
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
  title() {
    return [
      this.faker.Random.element(data["titles"]["descriptor"]),
      this.faker.Random.element(data["titles"]["level"]),
      this.faker.Random.element(data["titles"]["job"]),
    ].join(" ");
  }

}

module.exports = Name;
