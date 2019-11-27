const data = require("../../data/rick-and-morty.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function RickAndMorty(faker) {

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

}

module.exports = RickAndMorty;
