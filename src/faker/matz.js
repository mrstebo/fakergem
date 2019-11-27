const data = require("../../data/matz.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Matz(faker) {

  /**
   * @returns {string}
   */
  this.quote = function() {
    return faker.Random.element(data["quotes"]);
  };

}

module.exports = Matz;
