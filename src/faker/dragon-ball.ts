import { Faker } from '../faker';
import data from '../data/dragon-ball.json';

export class DragonBall {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  character(): string {
    return this.faker.Random.element(data.characters);
  }
}
