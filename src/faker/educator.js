import { itemFromCollection } from '../utils/random';

const data = require('../../data/educator.json');

function name() {
  return itemFromCollection(data['names']);
}

function tertiaryType() {
  return itemFromCollection(data['tertiaries']['types']);
}

function secondary() {
  return itemFromCollection(data['secondaries']);
}

function courseType() {
  return itemFromCollection(data['tertiaries']['course']['types']);
}

function courseSubject() {
  return itemFromCollection(data['tertiaries']['course']['subjects']);
}

export default class Educator {
  constructor(faker) {
    this.faker = faker;
  }

  university() {
    return `${name()} ${tertiaryType()}`;
  }

  secondarySchool() {
    return `${name()} ${secondary()}`;
  }

  course() {
    return `${courseType()} ${courseSubject()}`;
  }

  campus() {
    return `${name()} Campus`;
  }
}
