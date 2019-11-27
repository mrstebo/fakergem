const data = require("../../data/space.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Space(faker) {

  /**
   * @returns {string}
   */
  this.planet = function() {
    return faker.Random.element(data["planets"]);
  };

  /**
   * @returns {string}
   */
  this.moon = function() {
    return faker.Random.element(data["moons"]);
  };

  /**
   * @returns {string}
   */
  this.galaxy = function() {
    return faker.Random.element(data["galaxies"]);
  };

  /**
   * @returns {string}
   */
  this.nebula = function() {
    return faker.Random.element(data["nebulas"]);
  };

  /**
   * @returns {string}
   */
  this.starCluster = function() {
    return faker.Random.element(data["starClusters"]);
  };

  /**
   * @returns {string}
   */
  this.constellation = function() {
    return faker.Random.element(data["constellations"]);
  };

  /**
   * @returns {string}
   */
  this.star = function() {
    return faker.Random.element(data["stars"]);
  };

  /**
   * @returns {string}
   */
  this.agency = function() {
    return faker.Random.element(data["agencies"]);
  };

  /**
   * @returns {string}
   */
  this.agencyAbv = function() {
    return faker.Random.element(data["agencyAbvs"]);
  };

  /**
   * @returns {string}
   */
  this.nasaSpaceCraft = function() {
    return faker.Random.element(data["nasaSpaceCrafts"]);
  };

  /**
   * @returns {string}
   */
  this.company = function() {
    return faker.Random.element(data["companies"]);
  };

  /**
   * @returns {string}
   */
  this.distanceMeasurement = function() {
    return faker.Random.element(data["distanceMeasurements"]);
  };

  /**
   * @returns {string}
   */
  this.meteorite = function() {
    return faker.Random.element(data["meteorites"]);
  };

}

module.exports = Space;
