const data = require("../../data/dragon-ball.json");

class DragonBall {

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

}

module.exports = DragonBall;
