const data = require("../../data/zelda.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Zelda(faker) {

  /**
   * @returns {string}
   */
  this.game = function() {
    return faker.Random.element(data["games"]);
  };

  /**
   * @returns {string}
   */
  this.character = function() {
    return faker.Random.element(data["characters"]);
  };

  /**
   * @returns {string}
   */
  this.location = function() {
    return faker.Random.element(data["locations"]);
  };

}

module.exports = Zelda;
