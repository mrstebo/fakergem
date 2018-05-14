import { itemFromCollection } from '../utils/random';

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
    return parse(this, itemFromCollection(data['phrases']));
  }

  abbreviation() {
    return itemFromCollection(data['abbreviations']);
  }

  adjective() {
    return itemFromCollection(data['adjectives']);
  }

  noun() {
    return itemFromCollection(data['nouns']);
  }

  verb() {
    return itemFromCollection(data['verbs']);
  }

  ingverb() {
    return itemFromCollection(data['ingverbs']);
  }
}
