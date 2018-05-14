import { itemFromCollection } from '../utils/random';

const data = require('../../data/team.json');
const addressData = require('../../data/address.json');

export default class Team {
  constructor(faker) {
    this.faker = faker;
  }

  creature() {
    return itemFromCollection(data['creatures']);
  }

  name() {
    return itemFromCollection(data['names']);
  }

  state() {
    return itemFromCollection(addressData['states']);
  }

  sport() {
    return itemFromCollection(data['sports']);
  }
}
