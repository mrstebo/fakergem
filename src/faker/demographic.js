const data = require("../../data/demographic.json");

class Demographic {

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
  race() {
    return this.faker.Random.element(data["races"]);
  }

  /**
   * @returns {string}
   */
  educationalAttainment() {
    return this.faker.Random.element(data["educationalAttainments"]);
  }

  /**
   * @returns {string}
   */
  demonym() {
    return this.faker.Random.element(data["demonyms"]);
  }

  /**
   * @returns {string}
   */
  maritalStatus() {
    return this.faker.Random.element(data["maritalStatuses"]);
  }

  /**
   * @returns {string}
   */
  sex() {
    return this.faker.Random.element(data["sexes"]);
  }

  /**
   * @param {string} unit
   * @returns {string}
   */
  height(unit="metric") {
    const inches = this.faker.Number.between(57, 86);

    switch(unit) {
      case "metric":
        return `${this.faker.Number.betweenF(1.45, 2.13).toFixed(2)}`;
      case "imperial":
        return `${Math.floor(inches / 12)} ft, ${inches % 12} in`;
    }
  }

}

module.exports = Demographic;
