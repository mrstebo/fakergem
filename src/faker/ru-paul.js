const data = require("../../data/ru-paul.json");

class RuPaul {

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

module.exports = RuPaul;
