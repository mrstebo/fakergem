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
    .map(_ => randomNumber(0, 10))
    .join('')
    .replace(/(\d{2})(\d{7})/, '$1-$2')
}

export function dunsNumber() {
  return [...Array(9).keys()]
    .map(_ => randomNumber(0, 10))
    .join('')
    .replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
}

export function logo() {
  const number = randomNumber(1, 14);
  return `https://pigment.github.io/fake-logos/logos/medium/color/${number}.png`
}

export function swedishOrganisationNumber() {
  const base = [
    randomNumber(1, 10),
    randomNumber(0, 10),
    randomNumber(2, 10),
    [...Array(6).keys()].map(_ => randomNumber(0, 10)).join('')
  ].join('');
  return `${base}${luhnAlgorithm(base)}`;
}

export function norwegianOrganisationNumber() {
  return '0';
}

export function australianBusinessNumber() {
  return '0';
}

export function profession() {
  return itemFromCollection(data['professions']);
}

function luhnAlgorithm(number) {
  return '0';
}
