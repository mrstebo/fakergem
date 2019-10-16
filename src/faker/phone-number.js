const data = require("../../data/phone-number.json");

module.exports = class PhoneNumber {
  constructor(faker) {
    this.faker = faker;
  }

  phoneNumber() {
    const format = this.faker.Random.element(data["phoneNumber"]["formats"]);
    return format.replace(/#/g, () => this.faker.Number.between(0, 9));
  }

  cellPhone() {
    const format = this.faker.Random.element(data["cellPhone"]["formats"]);
    return format.replace(/#/g, () => this.faker.Number.between(0, 9));
  }

  areaCode() {
    return this.faker.Random.element(data["areaCodes"]);
  }

  exchangeCode() {
    return this.faker.Random.element(data["exchangeCodes"]);
  }

  subscriberNumber(length=4) {
    const min = Math.pow(10, length)/10;
    const max = (min * 10) - 1;
    return `${this.faker.Number.between(min, max)}`;
  }

  extension(length=4) {
    return this.subscriberNumber(length);
  }
};
