import { itemFromCollection, randomNumber } from '../utils/random';

const data = require('../../data/business.json');

export function creditCardNumber() {
  return itemFromCollection(data['creditCardNumbers']);
}

export function creditCardExpiryDate() {
  return daysFromNow(365 * (randomNumber(0, 4) + 1));
}

export function creditCardType() {
  return itemFromCollection(data['creditCardTypes']);
}

function daysFromNow(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  d.setHours(0, 0, 0, 0);
  return d;
}
