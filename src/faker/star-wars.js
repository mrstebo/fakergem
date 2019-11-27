const data = require("../../data/star-wars.json");

function capitalize(text) {
  return text.replace(/\b\w/, x => x.toUpperCase());
}

/**
 *
 * @param {import('../faker').Faker} faker
 */
function StarWars(faker) {

  /**
   * @returns {string}
   */
  this.character = function() {
    return faker.Random.element(data["characters"]);
  };

  /**
   * @returns {string}
   */
  this.droid = function() {
    return faker.Random.element(data["droids"]);
  };

  /**
   * @returns {string}
   */
  this.planet = function() {
    return faker.Random.element(data["planets"]);
  };

  /**
   * @returns {string}
   */
  this.quote = function() {
    return faker.Random.element(data["quotes"]);
  };

  /**
   * @returns {string}
   */
  this.specie = function() {
    return faker.Random.element(data["species"]);
  };

  /**
   * @returns {string}
   */
  this.vehicle = function() {
    return faker.Random.element(data["vehicles"]);
  };

  /**
   * @returns {string}
   */
  this.wookieSentence = function() {
    return capitalize(
      [...Array(faker.Number.between(1, 10)).keys()]
        .map(() =>  faker.Random.element(data["wookieWords"]))
        .join(" ") + faker.Random.element([".", "?", "!"])
    );
  };

}

module.exports = StarWars;
