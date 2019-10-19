import { Faker } from '../faker';
import data from '../data/harry-potter.json';

export class HarryPotter {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  character(): string {
    return this.faker.Random.element(data.characters);
  }

  location(): string {
    return this.faker.Random.element(data.locations);
  }

  quote(): string {
    return this.faker.Random.element(data.quotes);
  }

  book(): string {
    return this.faker.Random.element(data.books);
  }
}
