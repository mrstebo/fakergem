const data = require("../../data/space.json");

class Space {

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
  planet() {
    return this.faker.Random.element(data["planets"]);
  }

  /**
   * @returns {string}
   */
  moon() {
    return this.faker.Random.element(data["moons"]);
  }

  /**
   * @returns {string}
   */
  galaxy() {
    return this.faker.Random.element(data["galaxies"]);
  }

  /**
   * @returns {string}
   */
  nebula() {
    return this.faker.Random.element(data["nebulas"]);
  }

  /**
   * @returns {string}
   */
  starCluster() {
    return this.faker.Random.element(data["starClusters"]);
  }

  /**
   * @returns {string}
   */
  constellation() {
    return this.faker.Random.element(data["constellations"]);
  }

  /**
   * @returns {string}
   */
  star() {
    return this.faker.Random.element(data["stars"]);
  }

  /**
   * @returns {string}
   */
  agency() {
    return this.faker.Random.element(data["agencies"]);
  }

  /**
   * @returns {string}
   */
  agencyAbv() {
    return this.faker.Random.element(data["agencyAbvs"]);
  }

  /**
   * @returns {string}
   */
  nasaSpaceCraft() {
    return this.faker.Random.element(data["nasaSpaceCrafts"]);
  }

  /**
   * @returns {string}
   */
  company() {
    return this.faker.Random.element(data["companies"]);
  }

  /**
   * @returns {string}
   */
  distanceMeasurement() {
    return this.faker.Random.element(data["distanceMeasurements"]);
  }

  /**
   * @returns {string}
   */
  meteorite() {
    return this.faker.Random.element(data["meteorites"]);
  }

}

module.exports = Space;
