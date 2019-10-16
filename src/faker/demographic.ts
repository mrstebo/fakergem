import { Faker } from '../faker';
import data from '../../data/demographic.json';

export class Demographic {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  race(): string {
    return this.faker.Random.element(data.races);
  }

  educationalAttainment(): string {
    return this.faker.Random.element(data.educationalAttainments);
  }

  demonym(): string {
    return this.faker.Random.element(data.demonyms);
  }

  maritalStatus(): string {
    return this.faker.Random.element(data.maritalStatuses);
  }

  sex(): string {
    return this.faker.Random.element(data.sexes);
  }

  height(unit: string = 'metric'): string {
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
