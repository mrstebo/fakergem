import data from '../data/demographic.json';
import { Faker } from '../faker';

export class Demographic {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public race(): string {
    return this.faker.Random.element(data.races);
  }

  public educationalAttainment(): string {
    return this.faker.Random.element(data.educationalAttainments);
  }

  public demonym(): string {
    return this.faker.Random.element(data.demonyms);
  }

  public maritalStatus(): string {
    return this.faker.Random.element(data.maritalStatuses);
  }

  public sex(): string {
    return this.faker.Random.element(data.sexes);
  }

  public height(unit: string = 'metric'): string {
    switch (unit) {
      case 'metric':
        return `${this.faker.Number.betweenF(1.45, 2.13).toFixed(2)}`;
      case 'imperial':
        const inches = this.faker.Number.between(57, 86);
        return `${Math.floor(inches / 12)} ft, ${inches % 12} in`;
      default:
        return '0.00';
    }
  }
}
