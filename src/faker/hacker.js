const data = require("../../data/hacker.json");

function parse(faker, format) {
  const text = format.replace(/\{(\w+)\}/g, m => `{Hacker.${m.substring(1)}`);
  return faker.Fake.f(text).replace(/^(\w)/, m => m[0].toUpperCase());
}

class Hacker {

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
  saySomethingSmart() {
    return parse(this.faker, this.faker.Random.element(data["phrases"]));
  }

  /**
   * @returns {string}
   */
  abbreviation() {
    return this.faker.Random.element(data["abbreviations"]);
  }

  /**
   * @returns {string}
   */
  adjective() {
    return this.faker.Random.element(data["adjectives"]);
  }

  /**
   * @returns {string}
   */
  noun() {
    return this.faker.Random.element(data["nouns"]);
  }

  /**
   * @returns {string}
   */
  verb() {
    return this.faker.Random.element(data["verbs"]);
  }

  /**
   * @returns {string}
   */
  ingverb() {
    return this.faker.Random.element(data["ingverbs"]);
  }

}

module.exports = Hacker;
