import { itemFromCollection, randomNumber, randomFloat } from '../utils/random';

const data = require('../../data/demographic.json');

export function race() {
  return itemFromCollection(data['races']);
}

export function educationalAttainment() {
  return itemFromCollection(data['educationalAttainments']);
}

export function demonym() {
  return itemFromCollection(data['demonyms']);
}

export function maritalStatus() {
  return itemFromCollection(data['maritalStatuses']);
}

export function sex() {
  return itemFromCollection(data['sexes']);
}

export function height(unit='metric') {
  switch(unit) {
    case 'metric':
      return `${randomFloat(1.45, 2.13).toFixed(2)}`;
    case 'imperial':
      const inches = randomNumber(57, 86);
      return `${Math.floor(inches / 12)} ft, ${inches % 12} in`;
  }
}
