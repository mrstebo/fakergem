import { itemFromCollection } from '../utils/random';

const data = require('../../data/game-of-thrones.json');

export default class GameOfThrones {
  constructor(faker) {
    this.faker = faker;
  }

  character() {
    return itemFromCollection(data['characters']);
  }

  house() {
    return itemFromCollection(data['houses']);
  }

  city() {
    return itemFromCollection(data['cities']);
  }

  dragon() {
    return itemFromCollection(data['dragons']);
  }
}
