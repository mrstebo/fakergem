const data = require("../../data/name.json");

class Name {

  /**
   *
   * @param {import('../faker').Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return [
      this.firstName(),
      this.lastName(),
    ].join(" ");
  }

  nameWithMiddle() {
    return [
      this.firstName(),
      this.firstName(),
      this.lastName(),
    ].join(" ");
  }

  firstName() {
    return this.faker.Random.element(data["firstNames"]);
  }

  lastName() {
    return this.faker.Random.element(data["lastNames"]);
  }

  prefix() {
    return this.faker.Random.element(data["prefixes"]);
  }

  suffix() {
    return this.faker.Random.element(data["suffixes"]);
  }

  title() {
    return [
      this.faker.Random.element(data["titles"]["descriptor"]),
      this.faker.Random.element(data["titles"]["level"]),
      this.faker.Random.element(data["titles"]["job"]),
    ].join(" ");
  }

}

module.exports = Name;
