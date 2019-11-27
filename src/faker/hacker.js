const data = require("../../data/hacker.json");

function parse(faker, format) {
  const text = format.replace(/\{(\w+)\}/g, m => `{Hacker.${m.substring(1)}`);
  return faker.Fake.f(text).replace(/^(\w)/, m => m[0].toUpperCase());
}

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Hacker(faker) {

  /**
   * @returns {string}
   */
  this.saySomethingSmart = function() {
    return parse(faker, faker.Random.element(data["phrases"]));
  };

  /**
   * @returns {string}
   */
  this.abbreviation = function() {
    return faker.Random.element(data["abbreviations"]);
  };

  /**
   * @returns {string}
   */
  this.adjective = function() {
    return faker.Random.element(data["adjectives"]);
  };

  /**
   * @returns {string}
   */
  this.noun = function() {
    return faker.Random.element(data["nouns"]);
  };

  /**
   * @returns {string}
   */
  this.verb = function() {
    return faker.Random.element(data["verbs"]);
  };

  /**
   * @returns {string}
   */
  this.ingverb = function() {
    return faker.Random.element(data["ingverbs"]);
  };

}

module.exports = Hacker;
