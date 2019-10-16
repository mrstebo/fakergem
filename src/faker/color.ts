import { Faker } from '../faker';
import data from '../../data/color.json';

function leftPad(text, length, paddingCharacter) {
  let padding = [...Array(length)].map(_ => paddingCharacter).join('');
  return (padding + text).slice(-length);
}

export class Color {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  hexColor() {
    const n = this.faker.Number.between(0, 0xffffff);
    return `#${leftPad(n.toString(16), 6, '0')}`;
  }

  colorName() {
    return this.faker.Random.element(data.colorNames);
  }

  rgbColor() {
    return [...Array(3).keys()].map(_ => this.faker.Number.between(0, 255));
  }

  hslColor() {
    return [
      this.faker.Number.between(0, 360),
      Math.round(this.faker.Number.betweenF(0.0, 1.0), 2),
      Math.round(this.faker.Number.betweenF(0.0, 1.0), 2),
    ];
  }

  hslaColor() {
    return [
      this.faker.Number.between(0, 360),
      Math.round(this.faker.Number.betweenF(0.0, 1.0), 2),
      Math.round(this.faker.Number.betweenF(0.0, 1.0), 2),
      this.faker.Number.betweenF(0.0, 1.0),
    ];
  }
}
