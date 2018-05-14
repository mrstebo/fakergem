import { itemFromCollection, randomNumber } from '../utils/random';

const data = require('../../data/phone-number.json');

export default class PhoneNumber {
  constructor(faker) {
    this.faker = faker;
  }

  phoneNumber() {
    const format = itemFromCollection(data['phoneNumber']['formats']);
    return format.replace(/#/g, _ => randomNumber(0, 9));
  }

  cellPhone() {
    const format = itemFromCollection(data['cellPhone']['formats']);
    return format.replace(/#/g, _ => randomNumber(0, 9));
  }

  areaCode() {
    return itemFromCollection(data['areaCodes']);
  }

  exchangeCode() {
    return itemFromCollection(data['exchangeCodes']);
  }

  subscriberNumber(length=4) {
    const min = Math.pow(10, length)/10;
    const max = (min * 10) - 1;
    return randomNumber(min, max);
  }

  extension(length=4) {
    return this.subscriberNumber(length);
  }
}
