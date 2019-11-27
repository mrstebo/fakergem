const data = require("../../data/game-of-thrones.json");

class GameOfThrones {

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
  character() {
    return this.faker.Random.element(data["characters"]);
  }

  /**
   * @returns {string}
   */
  house() {
    return this.faker.Random.element(data["houses"]);
  }

  /**
   * @returns {string}
   */
  city() {
    return this.faker.Random.element(data["cities"]);
  }

  /**
   * @returns {string}
   */
  dragon() {
    return this.faker.Random.element(data["dragons"]);
  }

}

module.exports = GameOfThrones;
