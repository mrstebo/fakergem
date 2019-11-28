import data from '../data/book.json';
import { Faker } from '../faker';

export class Book {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public title(): string {
    return this.faker.Random.element(data.titles);
  }

  public author(): string {
    return [this.faker.Name.firstName(), this.faker.Name.lastName()].join(' ');
  }

  public publisher(): string {
    return this.faker.Random.element(data.publishers);
  }

  public genre(): string {
    return this.faker.Random.element(data.genres);
  }
}
