import { Faker } from '../faker';
import data from '../data/educator.json';

export class Educator {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  university(): string {
    const name = this.faker.Random.element(data.names);
    const tertiaryType = this.faker.Random.element(data.tertiaries.types);
    return `${name} ${tertiaryType}`;
  }

  secondarySchool(): string {
    const name = this.faker.Random.element(data.names);
    const secondary = this.faker.Random.element(data.secondaries);
    return `${name} ${secondary}`;
  }

  course(): string {
    const courseType = this.faker.Random.element(data.tertiaries.course.types);
    const courseSubject = this.faker.Random.element(data.tertiaries.course.subjects);
    return `${courseType} ${courseSubject}`;
  }

  campus(): string {
    const name = this.faker.Random.element(data.names);
    return `${name} Campus`;
  }
}
