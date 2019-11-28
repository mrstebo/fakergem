import data from '../data/dragon-ball.json';
import { Faker } from '../faker';

export class DragonBall {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public character(): string {
    return this.faker.Random.element(data.characters);
  }
}
