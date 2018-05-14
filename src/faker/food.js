import { itemFromCollection } from '../utils/random';

const data = require('../../data/food.json');

export default class Food {
  constructor(faker) {
    this.faker = faker;
  }

  ingredient() {
    return itemFromCollection(data['ingredients']);
  }

  spice() {
    return itemFromCollection(data['spices']);
  }

  measurement() {
    return itemFromCollection(data['measurements']);
  }
}
