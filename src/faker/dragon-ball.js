import { itemFromCollection } from '../utils/random';

const data = require('../../data/dragon-ball.json');

export default class DragonBall {
  constructor(faker) {
    this.faker = faker;
  }

  character() {
    return itemFromCollection(data['characters']);
  }
}
