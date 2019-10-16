import { Faker } from '../faker';
import data from '../../data/book.json';

export class Book {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  title(): string {
    return this.faker.Random.element(data.titles);
  }

  author(): string {
    return [this.faker.Name.firstName(), this.faker.Name.lastName()].join(' ');
  }

  publisher(): string {
    return this.faker.Random.element(data.publishers);
  }

  genre(): string {
    return this.faker.Random.element(data.genres);
  }
}
