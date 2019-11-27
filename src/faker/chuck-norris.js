const data = require("../../data/chuck-norris.json");

class ChuckNorris {

  /**
   *
   * @param {Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  fact() {
    return this.faker.Random.element(data["facts"]);
  }

}

module.exports = ChuckNorris;
