const data = require("../../data/phone-number.json");

class PhoneNumber {

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
  phoneNumber() {
    const format = this.faker.Random.element(data["phoneNumber"]["formats"]);
    return format.replace(/#/g, () => this.faker.Number.between(0, 9));
  }

  /**
   * @returns {string}
   */
  cellPhone() {
    const format = this.faker.Random.element(data["cellPhone"]["formats"]);
    return format.replace(/#/g, () => this.faker.Number.between(0, 9));
  }

  /**
   * @returns {string}
   */
  areaCode() {
    return this.faker.Random.element(data["areaCodes"]);
  }

  /**
   * @returns {string}
   */
  exchangeCode() {
    return this.faker.Random.element(data["exchangeCodes"]);
  }

  /**
   * @param {number} length
   * @returns {string}
   */
  subscriberNumber(length=4) {
    const min = Math.pow(10, length)/10;
    const max = (min * 10) - 1;
    return `${this.faker.Number.between(min, max)}`;
  }

  /**
   * @param {number} length
   * @returns {string}
   */
  extension(length=4) {
    return this.subscriberNumber(length);
  }

}

module.exports = PhoneNumber;
