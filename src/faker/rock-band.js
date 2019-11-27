const data = require("../../data/rock-band.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function RockBand(faker) {

  /**
   * @returns {string}
   */
  this.name = function() {
    return faker.Random.element(data["names"]);
  };

}

module.exports = RockBand;
