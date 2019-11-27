const data = require("../../data/harry-potter.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function HarryPotter(faker) {

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

  /**
   * @returns {string}
   */
  this.quote = function() {
    return faker.Random.element(data["quotes"]);
  };

  /**
   * @returns {string}
   */
  this.book = function() {
    return faker.Random.element(data["books"]);
  };

}

module.exports = HarryPotter;
