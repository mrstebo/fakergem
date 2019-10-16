import { Faker } from '../faker';
import data from '../../data/book.json';

export class Book {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  title() {
    return this.faker.Random.element(data.titles);
  }

  author() {
    return [this.faker.Name.firstName(), this.faker.Name.lastName()].join(' ');
  }

  publisher() {
    return this.faker.Random.element(data.publishers);
  }

  genre() {
    return this.faker.Random.element(data.genres);
  }
}
