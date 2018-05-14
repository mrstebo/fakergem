import { itemFromCollection } from '../utils/random';

const data = require('../../data/slack-emoji.json');

export default class SlackEmoji {
  constructor(faker) {
    this.faker = faker;
  }

  people() {
    return itemFromCollection(data['people']);
  }

  nature() {
    return itemFromCollection(data['nature']);
  }

  foodAndDrink() {
    return itemFromCollection(data['foodAndDrink']);
  }

  celebration() {
    return itemFromCollection(data['celebration']);
  }

  activity() {
    return itemFromCollection(data['activity']);
  }

  travelAndPlaces() {
    return itemFromCollection(data['travelAndPlaces']);
  }

  objectsAndSymbols() {
    return itemFromCollection(data['objectsAndSymbols']);
  }

  custom() {
    return itemFromCollection(data['custom']);
  }

  emoji() {
    return itemFromCollection([
      ...data['people'],
      ...data['nature'],
      ...data['foodAndDrink'],
      ...data['celebration'],
      ...data['activity'],
      ...data['travelAndPlaces'],
      ...data['objectsAndSymbols'],
      ...data['custom']
    ]);
  }
}
