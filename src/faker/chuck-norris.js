const data = require("../../data/chuck-norris.json");

class ChuckNorris {

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
  fact() {
    return this.faker.Random.element(data["facts"]);
  }

}

module.exports = ChuckNorris;
