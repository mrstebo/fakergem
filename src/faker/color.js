import data from '../../data/color.json';
import { randomNumber, randomFloat, itemFromCollection } from '../utils/random';

export function hexColor() {
  return `#${leftPad(randomNumber(0, 0xffffff).toString(16), 6, '0')}`;
}

export function colorName() {
  return itemFromCollection(data['colorNames']);
}

export function rgbColor() {
  return [...Array(3).keys()].map(_ => randomNumber(0, 255));
}

export function hslColor() {
  return [
    randomNumber(0, 360),
    Math.round(randomFloat(0, 1), 2),
    Math.round(randomFloat(0, 1), 2)
  ];
}

export function hslaColor() {
  return [
    randomNumber(0, 360),
    Math.round(randomFloat(0, 1), 2),
    Math.round(randomFloat(0, 1), 2),
    randomFloat(0, 1)
  ];
}

function leftPad(text, length, paddingCharacter) {
  let padding = [...Array(length)].map(_ => paddingCharacter).join('');
  return (padding + text).slice(-length);
}
