const data = require("../../data/coffee.json");

function parse(faker, format) {
  return format
    .replace(/\{intensifier\}/g, faker.Random.element(data["intensifiers"]))
    .replace(/\{body\}/g, faker.Random.element(data["bodies"]))
    .replace(/\{descriptor\}/g, faker.Random.element(data["descriptors"]))
    .replace(/\{name1\}/g, faker.Random.element(data["name1"]))
    .replace(/\{name2\}/g, faker.Random.element(data["name2"]));
}

module.exports = class Coffee {

  /**
   *
   * @param {import("../faker")} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  blendName() {
    const blendName = this.faker.Random.element(data["blendNames"]);
    return parse(this.faker, blendName);
  }

  origin() {
    const country = this.faker.Random.element(data["countries"]);
    const key = country.replace(/\s/, "_").toLowerCase();
    const region = this.faker.Random.element(data["regions"][key]);
    return `${region}, ${country}`;
  }

  variety() {
    return this.faker.Random.element(data["varieties"]);
  }

  notes() {
    const notes = this.faker.Random.element(data["notes"]);
    return parse(this.faker, notes);
  }

};
