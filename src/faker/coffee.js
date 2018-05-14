import { itemFromCollection } from '../utils/random';

const data = require('../../data/coffee.json');

function country() {
  return itemFromCollection(data['countries']);
}

function region(country) {
  const key = country.replace(/\s/, '_').toLowerCase();
  return itemFromCollection(data['regions'][key]);
}

function intensifier() {
  return itemFromCollection(data['intensifiers']);
}

function body() {
  return itemFromCollection(data['bodies']);
}

function descriptor() {
  return itemFromCollection(data['descriptors']);
}

function name1() {
  return itemFromCollection(data['name1']);
}

function name2() {
  return itemFromCollection(data['name2']);
}

function parseFormat(format) {
  return format
    .replace(/\{intensifier\}/g, intensifier())
    .replace(/\{body\}/g, body())
    .replace(/\{descriptor\}/g, descriptor())
    .replace(/\{name1\}/g, name1())
    .replace(/\{name2\}/g, name2());
}

export default class Coffee {
  constructor(faker) {
    this.faker = faker;
  }

  blendName() {
    return parseFormat(itemFromCollection(data['blendNames']));
  }

  origin() {
    const c = country();
    const r = region(c);
    return `${r}, ${c}`;
  }

  variety() {
    return itemFromCollection(data['varieties']);
  }

  notes() {
    return parseFormat(itemFromCollection(data['notes']));
  }
}
