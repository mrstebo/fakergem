const data = require("../../data/university.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function University(faker) {

  /**
   * @returns {string}
   */
  this.name = function() {
    return faker.Random.element(data["names"]);
  };

}

module.exports = University;
