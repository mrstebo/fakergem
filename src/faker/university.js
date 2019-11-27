const data = require("../../data/university.json");

class University {

  /**
   *
   * @param {Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data["names"]);
  }

}

module.exports = University;
