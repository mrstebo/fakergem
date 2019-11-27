const data = require("../../data/pokemon.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Pokemon(faker) {

  /**
   * @returns {string}
   */
  this.name = function() {
    return faker.Random.element(data["names"]);
  };

  /**
   * @returns {string}
   */
  this.location = function() {
    return faker.Random.element(data["locations"]);
  };

}

module.exports = Pokemon;
