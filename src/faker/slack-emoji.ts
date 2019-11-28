import data from '../data/slack-emoji.json';
import { Faker } from '../faker';

export class SlackEmoji {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public people(): string {
    return this.faker.Random.element(data.people);
  }

  public nature(): string {
    return this.faker.Random.element(data.nature);
  }

  public foodAndDrink(): string {
    return this.faker.Random.element(data.foodAndDrink);
  }

  public celebration(): string {
    return this.faker.Random.element(data.celebration);
  }

  public activity(): string {
    return this.faker.Random.element(data.activity);
  }

  public travelAndPlaces(): string {
    return this.faker.Random.element(data.travelAndPlaces);
  }

  public objectsAndSymbols(): string {
    return this.faker.Random.element(data.objectsAndSymbols);
  }

  public custom(): string {
    return this.faker.Random.element(data.custom);
  }

  public emoji(): string {
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
