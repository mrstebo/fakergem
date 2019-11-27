const data = require("../../data/ru-paul.json");

class RuPaul {

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
  quote() {
    return this.faker.Random.element(data["quotes"]);
  }

}

module.exports = RuPaul;
