const data = require("../../data/music.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Music(faker) {

  /**
   * @returns {string}
   */
  this.key = function() {
    return [
      faker.Random.element(data["keys"]),
      faker.Random.element(data["keyVariants"]),
    ].join("");
  };

  /**
   * @returns {string}
   */
  this.chord = function() {
    return [
      faker.Random.element(data["keys"]),
      faker.Random.element(data["chordTypes"]),
    ].join("");
  };

  /**
   * @returns {string}
   */
  this.instrument = function() {
    return faker.Random.element(data["instruments"]);
  };

}

module.exports = Music;
