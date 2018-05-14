import { itemFromCollection } from '../utils/random';

const data = require('../../data/friends.json');

export default class Friends {
  constructor(faker) {
    this.faker = faker;
  }

  character() {
    return itemFromCollection(data['characters']);
  }

  location() {
    return itemFromCollection(data['locations']);
  }

  quote() {
    return itemFromCollection(data['quotes']);
  }
}
