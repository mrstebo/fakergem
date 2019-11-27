const data = require("../../data/ancient.json");

class Ancient {

  /**
   *
   * @param {Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  god() {
    return this.faker.Random.element(data["gods"]);
  }

  primordial() {
    return this.faker.Random.element(data["primordials"]);
  }

  titan() {
    return this.faker.Random.element(data["titans"]);
  }

  hero() {
    return this.faker.Random.element(data["heroes"]);
  }

}

module.exports = Ancient;
