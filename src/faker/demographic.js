const data = require("../../data/demographic.json");

module.exports = class Demographic {

  /**
   *
   * @param {import("../faker")} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  race() {
    return this.faker.Random.element(data["races"]);
  }

  educationalAttainment() {
    return this.faker.Random.element(data["educationalAttainments"]);
  }

  demonym() {
    return this.faker.Random.element(data["demonyms"]);
  }

  maritalStatus() {
    return this.faker.Random.element(data["maritalStatuses"]);
  }

  sex() {
    return this.faker.Random.element(data["sexes"]);
  }

  height(unit="metric") {
    const inches = this.faker.Number.between(57, 86);

    switch(unit) {
      case "metric":
        return `${this.faker.Number.betweenF(1.45, 2.13).toFixed(2)}`;
      case "imperial":
        return `${Math.floor(inches / 12)} ft, ${inches % 12} in`;
    }
  }

};
