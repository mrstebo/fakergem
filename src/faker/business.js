const data = require("../../data/business.json");

function daysFromNow(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  d.setHours(0, 0, 0, 0);
  return d;
}

class Business {

  /**
   *
   * @param {import('../faker').Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  /**
   * @returns {string}
   */
  creditCardNumber() {
    return this.faker.Random.element(data["creditCardNumbers"]);
  }

  /**
   * @returns {Date}
   */
  creditCardExpiryDate() {
    return daysFromNow(365 * this.faker.Number.between(1, 5));
  }

  /**
   * @returns {string}
   */
  creditCardType() {
    return this.faker.Random.element(data["creditCardTypes"]);
  }

}

module.exports = Business;
