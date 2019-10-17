import { Faker } from '../faker';
import data from '../data/coffee.json';

export class Coffee {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  blendName(): string {
    const blendName = this.faker.Random.element(data.blendNames);
    return this.parse(blendName);
  }

  origin(): string {
    const country = this.faker.Random.element(data.countries);
    const key = country.replace(/\s/, '_').toLowerCase();
    const regions = data.regions as { [key: string]: any };
    const region = this.faker.Random.element(regions[key]);
    return `${region}, ${country}`;
  }

  variety(): string {
    return this.faker.Random.element(data.varieties);
  }

  notes(): string {
    const notes = this.faker.Random.element(data.notes);
    return this.parse(notes);
  }

  private parse(format: string): string {
    return format
      .replace(/\{intensifier\}/g, this.faker.Random.element(data.intensifiers))
      .replace(/\{body\}/g, this.faker.Random.element(data.bodies))
      .replace(/\{descriptor\}/g, this.faker.Random.element(data.descriptors))
      .replace(/\{name1\}/g, this.faker.Random.element(data.name1))
      .replace(/\{name2\}/g, this.faker.Random.element(data.name2));
  }
}
