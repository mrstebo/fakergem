const data = require("../../data/university.json");

class University {

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

}

module.exports = University;
