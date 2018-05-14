import { itemFromCollection, randomNumber, randomFloat } from '../utils/random';

const data = require('../../data/demographic.json');

export default class Demographic {
  constructor(faker) {
    this.faker = faker;
  }

  race() {
    return itemFromCollection(data['races']);
  }

  educationalAttainment() {
    return itemFromCollection(data['educationalAttainments']);
  }

  demonym() {
    return itemFromCollection(data['demonyms']);
  }

  maritalStatus() {
    return itemFromCollection(data['maritalStatuses']);
  }

  sex() {
    return itemFromCollection(data['sexes']);
  }

  height(unit='metric') {
    switch(unit) {
      case 'metric':
        return `${randomFloat(1.45, 2.13).toFixed(2)}`;
      case 'imperial':
        const inches = randomNumber(57, 86);
        return `${Math.floor(inches / 12)} ft, ${inches % 12} in`;
    }
  }
}
