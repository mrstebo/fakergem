const data = require("../../data/lord-of-the-rings.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function LordOfTheRings(faker) {

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

module.exports = LordOfTheRings;
