import { Faker } from '../faker';
import data from '../data/slack-emoji.json';

export class SlackEmoji {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  people(): string {
    return this.faker.Random.element(data.people);
  }

  nature(): string {
    return this.faker.Random.element(data.nature);
  }

  foodAndDrink(): string {
    return this.faker.Random.element(data.foodAndDrink);
  }

  celebration(): string {
    return this.faker.Random.element(data.celebration);
  }

  activity(): string {
    return this.faker.Random.element(data.activity);
  }

  travelAndPlaces(): string {
    return this.faker.Random.element(data.travelAndPlaces);
  }

  objectsAndSymbols(): string {
    return this.faker.Random.element(data.objectsAndSymbols);
  }

  custom(): string {
    return this.faker.Random.element(data.custom);
  }

  emoji(): string {
    return this.faker.Random.element([
      ...data.people,
      ...data.nature,
      ...data.foodAndDrink,
      ...data.celebration,
      ...data.activity,
      ...data.travelAndPlaces,
      ...data.objectsAndSymbols,
      ...data.custom,
    ]);
  }
}
