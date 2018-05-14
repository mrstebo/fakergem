import { itemFromCollection } from '../utils/random';

const data = require('../../data/name.json');

export default class Name {
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return [
      itemFromCollection(data['firstNames']),
      itemFromCollection(data['lastNames'])
    ].join(' ');
  }

  nameWithMiddle() {
    return [
      itemFromCollection(data['firstNames']),
      itemFromCollection(data['firstNames']),
      itemFromCollection(data['lastNames'])
    ].join(' ');
  }

  firstName() {
    return itemFromCollection(data['firstNames']);
  }

  lastName() {
    return itemFromCollection(data['lastNames']);
  }

  prefix() {
    return itemFromCollection(data['prefixes']);
  }

  suffix() {
    return itemFromCollection(data['suffixes']);
  }

  title() {
    return [
      itemFromCollection(data['titles']['descriptor']),
      itemFromCollection(data['titles']['level']),
      itemFromCollection(data['titles']['job'])
    ].join(' ');
  }
}
