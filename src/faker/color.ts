import data from '../data/color.json';
import { Faker } from '../faker';
import { leftPad } from '../utils/text-helpers';

export class Color {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public hexColor(): string {
    const n = this.faker.Number.between(0, 0xffffff);
    return `#${leftPad(n.toString(16), 6, '0')}`;
  }

  public colorName(): string {
    return this.faker.Random.element(data.colorNames);
  }

  public rgbColor(): number[] {
    return Array(3)
      .fill(null)
      .map(_ => this.faker.Number.between(0, 255));
  }

  public hslColor(): number[] {
    return [
      this.faker.Number.between(0, 360),
      Math.round(this.faker.Number.betweenF(0.0, 1.0)),
      Math.round(this.faker.Number.betweenF(0.0, 1.0)),
    ];
  }

  public hslaColor(): number[] {
    return [
      this.faker.Number.between(0, 360),
      Math.round(this.faker.Number.betweenF(0.0, 1.0)),
      Math.round(this.faker.Number.betweenF(0.0, 1.0)),
      this.faker.Number.betweenF(0.0, 1.0),
    ];
  }
}
