const data = require("../../data/game-of-thrones.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function GameOfThrones(faker) {

  /**
   * @returns {string}
   */
  this.character = function() {
    return faker.Random.element(data["characters"]);
  };

  /**
   * @returns {string}
   */
  this.house = function() {
    return faker.Random.element(data["houses"]);
  };

  /**
   * @returns {string}
   */
  this.city = function() {
    return faker.Random.element(data["cities"]);
  };

  /**
   * @returns {string}
   */
  this.dragon = function() {
    return faker.Random.element(data["dragons"]);
  };

}

module.exports = GameOfThrones;
