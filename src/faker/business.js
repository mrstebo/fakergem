const data = require("../../data/business.json");

function daysFromNow(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Business(faker) {

  /**
   * @returns {string}
   */
  this.creditCardNumber = function() {
    return faker.Random.element(data["creditCardNumbers"]);
  };

  /**
   * @returns {Date}
   */
  this.creditCardExpiryDate = function() {
    return daysFromNow(365 * faker.Number.between(1, 5));
  };

  /**
   * @returns {string}
   */
  this.creditCardType = function() {
    return faker.Random.element(data["creditCardTypes"]);
  };

}

module.exports = Business;
