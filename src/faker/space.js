const data = require("../../data/space.json");

class Space {

  /**
   *
   * @param {Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  planet() {
    return this.faker.Random.element(data["planets"]);
  }

  moon() {
    return this.faker.Random.element(data["moons"]);
  }

  galaxy() {
    return this.faker.Random.element(data["galaxies"]);
  }

  nebula() {
    return this.faker.Random.element(data["nebulas"]);
  }

  starCluster() {
    return this.faker.Random.element(data["starClusters"]);
  }

  constellation() {
    return this.faker.Random.element(data["constellations"]);
  }

  star() {
    return this.faker.Random.element(data["stars"]);
  }

  agency() {
    return this.faker.Random.element(data["agencies"]);
  }

  agencyAbv() {
    return this.faker.Random.element(data["agencyAbvs"]);
  }

  nasaSpaceCraft() {
    return this.faker.Random.element(data["nasaSpaceCrafts"]);
  }

  company() {
    return this.faker.Random.element(data["companies"]);
  }

  distanceMeasurement() {
    return this.faker.Random.element(data["distanceMeasurements"]);
  }

  meteorite() {
    return this.faker.Random.element(data["meteorites"]);
  }

}

module.exports = Space;