import { Faker } from '../faker';
import data from '../../data/slack-emoji.json';

export class SlackEmoji {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  people() {
    return this.faker.Random.element(data['people']);
  }

  nature() {
    return this.faker.Random.element(data['nature']);
  }

  foodAndDrink() {
    return this.faker.Random.element(data['foodAndDrink']);
  }

  celebration() {
    return this.faker.Random.element(data['celebration']);
  }

  activity() {
    return this.faker.Random.element(data['activity']);
  }

  travelAndPlaces() {
    return this.faker.Random.element(data['travelAndPlaces']);
  }

  objectsAndSymbols() {
    return this.faker.Random.element(data['objectsAndSymbols']);
  }

  custom() {
    return this.faker.Random.element(data['custom']);
  }

  emoji() {
    return this.faker.Random.element([
      ...data['people'],
      ...data['nature'],
      ...data['foodAndDrink'],
      ...data['celebration'],
      ...data['activity'],
      ...data['travelAndPlaces'],
      ...data['objectsAndSymbols'],
      ...data['custom'],
    ]);
  }
}
