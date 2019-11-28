import data from '../data/harry-potter.json';
import { Faker } from '../faker';

export class HarryPotter {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public character(): string {
    return this.faker.Random.element(data.characters);
  }

  public location(): string {
    return this.faker.Random.element(data.locations);
  }

  public quote(): string {
    return this.faker.Random.element(data.quotes);
  }

  public book(): string {
    return this.faker.Random.element(data.books);
  }
}
