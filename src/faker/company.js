import { itemFromCollection, randomNumber } from '../utils/random';

const data = require('../../data/company.json');

export function name() {
  return itemFromCollection(data['names']);
}

export function suffix() {
  return itemFromCollection(data['suffixes']);
}

export function catchPhrase() {
  return [...Array(3).keys()]
    .map(i => itemFromCollection(data['buzzwords'][i]))
    .join(' ');
}

export function buzzword() {
  return itemFromCollection([
    ...data['buzzwords'][0],
    ...data['buzzwords'][1],
    ...data['buzzwords'][2]
  ]);
}

export function bs() {
  return [...Array(3).keys()]
    .map(i => itemFromCollection(data['bs'][i]))
    .join(' ');
}

export function ein() {
  return [...Array(9).keys()]
    .map(_ => randomNumber(0, 9))
    .join('')
    .replace(/(\d{2})(\d{7})/, '$1-$2')
}

export function dunsNumber() {
  return [...Array(9).keys()]
    .map(_ => randomNumber(0, 9))
    .join('')
    .replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
}

export function logo() {
  const number = randomNumber(1, 14);
  return `https://pigment.github.io/fake-logos/logos/medium/color/${number}.png`
}

export function swedishOrganisationNumber() {
  const base = [
    randomNumber(1, 9),
    randomNumber(0, 9),
    randomNumber(2, 9),
    [...Array(6).keys()].map(_ => randomNumber(0, 9)).join('')
  ].join('');
  return `${base}${luhnAlgorithm(base)}`;
}

export function norwegianOrganisationNumber() {
  let mod11Check = null;
  let base = '';
  while (mod11Check == null) {
    base = [
      itemFromCollection([8, 9]),
      leftPad(randomNumber(0, 10000000), 7, '0')
    ].join('');
    mod11Check = mod11(base);
  }
  return `${base}${mod11Check}`;
}

export function australianBusinessNumber() {
  const base = leftPad(randomNumber(0, 1000000000), 9, '0');
  const abn = `00${base}`;

  return `${(99 - abnChecksum(abn) % 89)}${base}`;
}

export function profession() {
  return itemFromCollection(data['professions']);
}

function luhnAlgorithm(number) {
  const multiplications = `${number}`
    .split('')
    .map((x, i) => i % 2 == 0 ? parseInt(x) * 2 : parseInt(x));
  let sum = 0;
  multiplications.forEach(num => {
    `${num}`.split('').forEach(character => {
      sum += character.charCodeAt(0);
    });
  });

  return sum % 10 == 0 ? 0 : (sum / 10 + 1) * 10 - sum;
}

function mod11(number) {
  const weight = [
    2, 3, 4, 5, 6, 7,
    2, 3, 4, 5, 6, 7,
    2, 3, 4, 5, 6, 7
  ];
  const sum = `${number}`.split('').reverse().reduce((acc, val, index) => {
    return val.charCodeAt(0) * weight[index - 1];
  });
  const remainder = sum % 11;

  return 11 - remainder;
}

function abnChecksum(abn) {
  const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

  return weights.reduce((acc, val, index) => {
    return acc + (val * abn[index-1]);
  });
}

function leftPad(text, length, paddingCharacter) {
  let padding = [...Array(length)].map(_ => paddingCharacter).join('');
  return (padding + text).slice(-length);
}
