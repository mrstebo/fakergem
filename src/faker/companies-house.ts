import data from '../data/companies-house.json';
import { Faker } from '../faker';

export class CompaniesHouse {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public companyNumber(): string {
    return this.faker.Random.element(data.companyNumbers);
  }
}
