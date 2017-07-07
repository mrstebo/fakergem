import { itemFromCollection, randomNumber } from '../utils/random';

const data = require('../../data/internet.json');
const nameData = require('../../data/name.json');

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

  return [...Array(minLength + extraCharacters).keys()].reduce((result, val, index) => {
    const c = itemFromCollection(chars).toString();
    return result + (mixCase && index % 2 == 0 ? c.toUpperCase() : c);
  }, '');
}

export function domainName() {
  return [
    domainWord(),
    domainSuffix()
  ].join('.');
}

export function fixUmlauts(value='') {
  return value
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue');
}

export function domainWord() {
  return itemFromCollection(nameData['lastNames']);
}

export function domainSuffix() {
  return itemFromCollection(data['domainSuffixes'])
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

export function macAddress(prefix='') {
  const prefixDigits = prefix.split(':').filter(x => x).map(x => parseInt(x, 16));
  const addressDigits = [...Array(6 - prefixDigits.length).keys()].map(x => randomNumber(0, 255));
  return [...prefixDigits, ...addressDigits].map(x => x.toString(16)).join(':');
}

export function url() {
}

export function slug() {
}
