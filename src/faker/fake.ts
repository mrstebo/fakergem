import { Faker } from '../faker';

export class Fake {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  f(str: string): string {
    return str
      .replace(/\{(\w+)\.(\w+)\}/g, m => this.parseModule(this.faker, m))
      .replace(/#/g, _ => this.faker.Number.between(0, 9));
  }

  private parseModule(faker: Faker, match: string): string {
    const v = match.replace(/[{}]/g, '').split('.');
    const module = v[0];
    const method = v[1];
    const fakerDictionary = faker as { [key: string]: any };

    if (typeof fakerDictionary[module] === 'undefined') {
      throw new Error(`Invalid module: ${module}`);
    }

    if (typeof fakerDictionary[module][method] === 'undefined') {
      throw new Error(`Invalid method: ${module}.${method}`);
    }

    return fakerDictionary[module][method]();
  }
}
