const data = require("../../data/business.json");

function daysFromNow(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  d.setHours(0, 0, 0, 0);
  return d;
}

module.exports = class Business {

  /**
   *
   * @param {import("../faker")} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  creditCardNumber() {
    return this.faker.Random.element(data["creditCardNumbers"]);
  }

  creditCardExpiryDate() {
    return daysFromNow(365 * this.faker.Number.between(1, 5));
  }

  creditCardType() {
    return this.faker.Random.element(data["creditCardTypes"]);
  }

};
