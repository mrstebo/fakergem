const data = require("../../data/demographic.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Demographic(faker) {

  /**
   * @returns {string}
   */
  this.race = function() {
    return faker.Random.element(data["races"]);
  };

  /**
   * @returns {string}
   */
  this.educationalAttainment = function() {
    return faker.Random.element(data["educationalAttainments"]);
  };

  /**
   * @returns {string}
   */
  this.demonym = function() {
    return faker.Random.element(data["demonyms"]);
  };

  /**
   * @returns {string}
   */
  this.maritalStatus = function() {
    return faker.Random.element(data["maritalStatuses"]);
  };

  /**
   * @returns {string}
   */
  this.sex = function() {
    return faker.Random.element(data["sexes"]);
  };

  /**
   * @param {string} unit
   * @returns {string}
   */
  this.height = function(unit="metric") {
    const inches = faker.Number.between(57, 86);

    switch(unit) {
      case "metric":
        return `${faker.Number.betweenF(1.45, 2.13).toFixed(2)}`;
      case "imperial":
        return `${Math.floor(inches / 12)} ft, ${inches % 12} in`;
    }
  };

}

module.exports = Demographic;
