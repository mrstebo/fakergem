const data = require("../../data/matz.json");

class Matz {

  /**
   *
   * @param {Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  quote() {
    return this.faker.Random.element(data["quotes"]);
  }

}

module.exports = Matz;
