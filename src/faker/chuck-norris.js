const data = require("../../data/chuck-norris.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function ChuckNorris(faker) {

  /**
   * @returns {string}
   */
  this.fact = function() {
    return faker.Random.element(data["facts"]);
  };

}

module.exports = ChuckNorris;
