const data = require("../../data/phone-number.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function PhoneNumber(faker) {

  /**
   * @returns {string}
   */
  this.phoneNumber = function() {
    const format = faker.Random.element(data["phoneNumber"]["formats"]);
    return format.replace(/#/g, () => faker.Number.between(0, 9));
  };

  /**
   * @returns {string}
   */
  this.cellPhone = function() {
    const format = faker.Random.element(data["cellPhone"]["formats"]);
    return format.replace(/#/g, () => faker.Number.between(0, 9));
  };

  /**
   * @returns {string}
   */
  this.areaCode = function() {
    return faker.Random.element(data["areaCodes"]);
  };

  /**
   * @returns {string}
   */
  this.exchangeCode = function() {
    return faker.Random.element(data["exchangeCodes"]);
  };

  /**
   * @param {number} length
   * @returns {string}
   */
  this.subscriberNumber = function(length=4) {
    const min = Math.pow(10, length)/10;
    const max = (min * 10) - 1;
    return `${faker.Number.between(min, max)}`;
  };

  /**
   * @param {number} length
   * @returns {string}
   */
  this.extension = function(length=4) {
    return this.subscriberNumber(length);
  };

}

module.exports = PhoneNumber;
