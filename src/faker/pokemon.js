const data = require("../../data/pokemon.json");

class Pokemon {

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

  /**
   * @returns {string}
   */
  location() {
    return this.faker.Random.element(data["locations"]);
  }

}

module.exports = Pokemon;
