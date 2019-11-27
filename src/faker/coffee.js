const data = require("../../data/coffee.json");

function parse(faker, format) {
  return format
    .replace(/\{intensifier\}/g, faker.Random.element(data["intensifiers"]))
    .replace(/\{body\}/g, faker.Random.element(data["bodies"]))
    .replace(/\{descriptor\}/g, faker.Random.element(data["descriptors"]))
    .replace(/\{name1\}/g, faker.Random.element(data["name1"]))
    .replace(/\{name2\}/g, faker.Random.element(data["name2"]));
}

class Coffee {

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
  blendName() {
    const blendName = this.faker.Random.element(data["blendNames"]);
    return parse(this.faker, blendName);
  }

  /**
   * @returns {string}
   */
  origin() {
    const country = this.faker.Random.element(data["countries"]);
    const key = country.replace(/\s/, "_").toLowerCase();
    const region = this.faker.Random.element(data["regions"][key]);
    return `${region}, ${country}`;
  }

  /**
   * @returns {string}
   */
  variety() {
    return this.faker.Random.element(data["varieties"]);
  }

  /**
   * @returns {string}
   */
  notes() {
    const notes = this.faker.Random.element(data["notes"]);
    return parse(this.faker, notes);
  }

}

module.exports = Coffee;
