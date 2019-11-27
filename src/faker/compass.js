const data = require("../../data/compass.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Compass(faker) {

  function parse(format) {
    const text = format.replace(/\{(\w+)\}/g, m => `{Compass.${m.substring(1)}`);
    return faker.Fake.f(text);
  }

  /**
   * @returns {string}
   */
  this.direction = function() {
    return parse(faker.Random.element(data["directions"]));
  };

  /**
   * @returns {string}
   */
  this.cardinal = function() {
    return faker.Random.element(data["cardinals"]["word"]);
  };

  /**
   * @returns {string}
   */
  this.ordinal = function() {
    return faker.Random.element(data["ordinals"]["word"]);
  };

  /**
   * @returns {string}
   */
  this.halfWind = function() {
    return faker.Random.element(data["halfWinds"]["word"]);
  };

  /**
   * @returns {string}
   */
  this.quarterWind = function() {
    return faker.Random.element(data["quarterWinds"]["word"]);
  };

  /**
   * @returns {string}
   */
  this.abbreviation = function() {
    return parse(faker.Random.element(data["abbreviations"]));
  };

  /**
   * @returns {string}
   */
  this.cardinalAbbreviation = function() {
    return faker.Random.element(data["cardinals"]["abbreviation"]);
  };

  /**
   * @returns {string}
   */
  this.ordinalAbbreviation = function() {
    return faker.Random.element(data["ordinals"]["abbreviation"]);
  };

  /**
   * @returns {string}
   */
  this.halfWindAbbreviation = function() {
    return faker.Random.element(data["halfWinds"]["abbreviation"]);
  };

  /**
   * @returns {string}
   */
  this.quarterWindAbbreviation = function() {
    return faker.Random.element(data["quarterWinds"]["abbreviation"]);
  };

  /**
   * @returns {string}
   */
  this.azimuth = function() {
    return parse(faker.Random.element(data["azimuths"]));
  };

  /**
   * @returns {string}
   */
  this.cardinalAzimuth = function() {
    return faker.Random.element(data["cardinals"]["azimuth"]);
  };

  /**
   * @returns {string}
   */
  this.ordinalAzimuth = function() {
    return faker.Random.element(data["ordinals"]["azimuth"]);
  };

  /**
   * @returns {string}
   */
  this.halfWindAzimuth = function() {
    return faker.Random.element(data["halfWinds"]["azimuth"]);
  };

  /**
   * @returns {string}
   */
  this.quarterWindAzimuth = function() {
    return faker.Random.element(data["quarterWinds"]["azimuth"]);
  };

}

module.exports = Compass;
