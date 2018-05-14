import { randomNumber, randomFloat, itemFromCollection } from '../utils/random';

const data = require('../../data/color.json');

function leftPad(text, length, paddingCharacter) {
  let padding = [...Array(length)].map(_ => paddingCharacter).join('');
  return (padding + text).slice(-length);
}

export default class Color {
  constructor(faker) {
    this.faker = faker;
  }

  hexColor() {
    return `#${leftPad(randomNumber(0, 0xffffff).toString(16), 6, '0')}`;
  }

  colorName() {
    return itemFromCollection(data['colorNames']);
  }

  rgbColor() {
    return [...Array(3).keys()].map(_ => randomNumber(0, 255));
  }

  hslColor() {
    return [
      randomNumber(0, 360),
      Math.round(randomFloat(0, 1), 2),
      Math.round(randomFloat(0, 1), 2)
    ];
  }

  hslaColor() {
    return [
      randomNumber(0, 360),
      Math.round(randomFloat(0, 1), 2),
      Math.round(randomFloat(0, 1), 2),
      randomFloat(0, 1)
    ];
  }
}
