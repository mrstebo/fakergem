const data = require("../../data/dragon-ball.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function DragonBall(faker) {

  /**
   * @returns {string}
   */
  this.character = function() {
    return faker.Random.element(data["characters"]);
  };

}

module.exports = DragonBall;
