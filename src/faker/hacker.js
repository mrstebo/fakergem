const data = require('../../data/hacker.json');

function parse(hacker, format) {
  return format
    .replace(/\{abbreviation\}/g, hacker.abbreviation())
    .replace(/\{adjective\}/g, hacker.adjective())
    .replace(/\{noun\}/g, hacker.noun())
    .replace(/\{verb\}/g, hacker.verb())
    .replace(/\{ingverb\}/g, hacker.ingverb())
    .replace(/^(\w)/, m => m[0].toUpperCase());
}

export default class Hacker {
  constructor(faker) {
    this.faker = faker;
  }

  saySomethingSmart() {
    return parse(this, this.faker.Random.element(data['phrases']));
  }

  abbreviation() {
    return this.faker.Random.element(data['abbreviations']);
  }

  adjective() {
    return this.faker.Random.element(data['adjectives']);
  }

  noun() {
    return this.faker.Random.element(data['nouns']);
  }

  verb() {
    return this.faker.Random.element(data['verbs']);
  }

  ingverb() {
    return this.faker.Random.element(data['ingverbs']);
  }
}
