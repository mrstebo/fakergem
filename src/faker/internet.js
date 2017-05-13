import { itemFromCollection, randomNumber } from '../utils/random';

const data = require('../../data/internet.json');

// 0-9, a-z
const CHARACTERS = [...Array(10).keys()].concat([...Array(26).keys()].map(i => String.fromCharCode(97+i)));
const SYMBOLS = ['!', '@', '#', '$', '%', '^', '&', '*'];

export function email(name=null) {
  return [
    userName(name),
    domainName()
  ].join('@');
}

export function freeEmail(name=null) {
  return [
    userName(name),
    itemFromCollection(data['freeEmails'])
  ].join('@');
}

export function safeEmail(name=null) {
  return [
    userName(name),
    `example.${itemFromCollection(['org', 'com', 'net'])}`
  ].join('@');
}

export function userName() {
  return itemFromCollection(data['userNames']);
}

export function password(minLength=8, maxLength=16, mixCase=true, specialChars=false) {
  const diffLength = maxLength - minLength;
  const extraCharacters = randomNumber(0, diffLength + 1);
  const chars = specialChars ? [...CHARACTERS, ...SYMBOLS] : CHARACTERS;

  return [...Array(minLength + extraCharacters).keys()].map((_, index) => {
    const c = itemFromCollection(chars);
    return mixCase && index % 2 == 0 ? c.toUpperCase() : c;
  }).join('');
}

export function domainName() {
}

export function fixUmlauts() {
}

export function domainWord() {
}

export function domainSuffix() {
}

export function ipV4Address() {
}

export function privateIPV4Address() {
}

export function publicIPV4Address() {
}

export function ipV4Cidr() {
}

export function ipV6Address() {
}

export function ipV6Cidr() {
}

export function macAddress() {
}

export function url() {
}

export function slug() {
}
