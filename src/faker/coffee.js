const data = require("../../data/coffee.json");



/**
 *
 * @param {import('../faker').Faker} faker
 */
function Coffee(faker) {

  function parse(format) {
    return format
      .replace(/\{intensifier\}/g, faker.Random.element(data["intensifiers"]))
      .replace(/\{body\}/g, faker.Random.element(data["bodies"]))
      .replace(/\{descriptor\}/g, faker.Random.element(data["descriptors"]))
      .replace(/\{name1\}/g, faker.Random.element(data["name1"]))
      .replace(/\{name2\}/g, faker.Random.element(data["name2"]));
  }

  /**
   * @returns {string}
   */
  this.blendName = function() {
    const blendName = faker.Random.element(data["blendNames"]);
    return parse(blendName);
  };

  /**
   * @returns {string}
   */
  this.origin = function() {
    const country = faker.Random.element(data["countries"]);
    const key = country.replace(/\s/, "_").toLowerCase();
    const region = faker.Random.element(data["regions"][key]);
    return `${region}, ${country}`;
  };

  /**
   * @returns {string}
   */
  this.variety = function() {
    return faker.Random.element(data["varieties"]);
  };

  /**
   * @returns {string}
   */
  this.notes = function() {
    const notes = faker.Random.element(data["notes"]);
    return parse(notes);
  };

}

module.exports = Coffee;
