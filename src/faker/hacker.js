const data = require("../../data/hacker.json");

function parse(faker, format) {
  const text = format.replace(/\{(\w+)\}/g, m => `{Hacker.${m.substring(1)}`);
  return faker.Fake.f(text).replace(/^(\w)/, m => m[0].toUpperCase());
}

module.exports =  class Hacker {
  constructor(faker) {
    this.faker = faker;
  }

  saySomethingSmart() {
    return parse(this.faker, this.faker.Random.element(data["phrases"]));
  }

  abbreviation() {
    return this.faker.Random.element(data["abbreviations"]);
  }

  adjective() {
    return this.faker.Random.element(data["adjectives"]);
  }

  noun() {
    return this.faker.Random.element(data["nouns"]);
  }

  verb() {
    return this.faker.Random.element(data["verbs"]);
  }

  ingverb() {
    return this.faker.Random.element(data["ingverbs"]);
  }
};
