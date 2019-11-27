const data = require("../../data/ancient.json");

class Ancient {

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
  god() {
    return this.faker.Random.element(data["gods"]);
  }

  /**
   * @returns {string}
   */
  primordial() {
    return this.faker.Random.element(data["primordials"]);
  }

  /**
   * @returns {string}
   */
  titan() {
    return this.faker.Random.element(data["titans"]);
  }

  /**
   * @returns {string}
   */
  hero() {
    return this.faker.Random.element(data["heroes"]);
  }

}

module.exports = Ancient;
