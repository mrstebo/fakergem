const data = require("../../data/compass.json");

function parse(faker, format) {
  const text = format.replace(/\{(\w+)\}/g, m => `{Compass.${m.substring(1)}`);
  return faker.Fake.f(text);
}

class Compass {

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
  direction() {
    return parse(this.faker, this.faker.Random.element(data["directions"]));
  }

  /**
   * @returns {string}
   */
  cardinal() {
    return this.faker.Random.element(data["cardinals"]["word"]);
  }

  /**
   * @returns {string}
   */
  ordinal() {
    return this.faker.Random.element(data["ordinals"]["word"]);
  }

  /**
   * @returns {string}
   */
  halfWind() {
    return this.faker.Random.element(data["halfWinds"]["word"]);
  }

  /**
   * @returns {string}
   */
  quarterWind() {
    return this.faker.Random.element(data["quarterWinds"]["word"]);
  }

  /**
   * @returns {string}
   */
  abbreviation() {
    return parse(this.faker, this.faker.Random.element(data["abbreviations"]));
  }

  /**
   * @returns {string}
   */
  cardinalAbbreviation() {
    return this.faker.Random.element(data["cardinals"]["abbreviation"]);
  }

  /**
   * @returns {string}
   */
  ordinalAbbreviation() {
    return this.faker.Random.element(data["ordinals"]["abbreviation"]);
  }

  /**
   * @returns {string}
   */
  halfWindAbbreviation() {
    return this.faker.Random.element(data["halfWinds"]["abbreviation"]);
  }

  /**
   * @returns {string}
   */
  quarterWindAbbreviation() {
    return this.faker.Random.element(data["quarterWinds"]["abbreviation"]);
  }

  /**
   * @returns {string}
   */
  azimuth() {
    return parse(this.faker, this.faker.Random.element(data["azimuths"]));
  }

  /**
   * @returns {string}
   */
  cardinalAzimuth() {
    return this.faker.Random.element(data["cardinals"]["azimuth"]);
  }

  /**
   * @returns {string}
   */
  ordinalAzimuth() {
    return this.faker.Random.element(data["ordinals"]["azimuth"]);
  }

  /**
   * @returns {string}
   */
  halfWindAzimuth() {
    return this.faker.Random.element(data["halfWinds"]["azimuth"]);
  }

  /**
   * @returns {string}
   */
  quarterWindAzimuth() {
    return this.faker.Random.element(data["quarterWinds"]["azimuth"]);
  }

}

module.exports = Compass;
