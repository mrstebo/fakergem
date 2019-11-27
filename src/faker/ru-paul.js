const data = require("../../data/ru-paul.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function RuPaul(faker) {

  /**
   * @returns {string}
   */
  this.quote = function() {
    return faker.Random.element(data["quotes"]);
  };

}

module.exports = RuPaul;
