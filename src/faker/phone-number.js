import { itemFromCollection, randomNumber } from '../utils/random';

const data = require('../../data/phone-number.json');

export function phoneNumber() {
  const format = itemFromCollection(data['phoneNumber']['formats']);
  return format.replace(/#/g, _ => randomNumber(0, 9));
}

export function cellPhone() {
  const format = itemFromCollection(data['cellPhone']['formats']);
  return format.replace(/#/g, _ => randomNumber(0, 9));
}

export function areaCode() {
  return itemFromCollection(data['areaCodes']);
}

export function exchangeCode() {
  return itemFromCollection(data['exchangeCodes']);
}

export function subscriberNumber(length=4) {
  const min = Math.pow(10, length)/10;
  const max = (min * 10) - 1;
  return randomNumber(min, max);
}

export function extension(length=4) {
  return subscriberNumber(length);
}
