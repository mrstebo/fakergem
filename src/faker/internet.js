import { itemFromCollection, randomNumber } from '../utils/random';
import shuffle from '../utils/shuffle';

const data = require('../../data/internet.json');
const nameData = require('../../data/name.json');
const loremData = require('../../data/lorem.json');

// 0-9, a-z
const CHARACTERS = [...Array(10).keys()].concat([...Array(26).keys()].map(i => String.fromCharCode(97+i)));
const SYMBOLS = ['!', '@', '#', '$', '%', '^', '&', '*'];
const PRIVATE_NET_REGEX = [
  /^10\./,                                       // 10.0.0.0    – 10.255.255.255
  /^100\.(6[4-9]|[7-9]\d|1[0-1]\d|12[0-7])\./,   // 100.64.0.0  – 100.127.255.255
  /^127\./,                                      // 127.0.0.0   – 127.255.255.255
  /^169\.254\./,                                 // 169.254.0.0 – 169.254.255.255
  /^172\.(1[6-9]|2\d|3[0-1])\./,                 // 172.16.0.0  – 172.31.255.255
  /^192\.0\.0\./,                                // 192.0.0.0   – 192.0.0.255
  /^192\.168\./,                                 // 192.168.0.0 – 192.168.255.255
  /^198\.(1[8-9])\./                             // 198.18.0.0  – 198.19.255.255
];
const RESERVED_NETS_REGEX = [
  /^0\./,                 // 0.0.0.0      – 0.255.255.255
  /^192\.0\.2\./,         // 192.0.2.0    – 192.0.2.255
  /^192\.88\.99\./,       // 192.88.99.0  – 192.88.99.255
  /^198\.51\.100\./,      // 198.51.100.0 – 198.51.100.255
  /^203\.0\.113\./,       // 203.0.113.0  – 203.0.113.255
  /^(22[4-9]|23\d)\./,    // 224.0.0.0    – 239.255.255.255
  /^(24\d|25[0-5])\./     // 240.0.0.0    – 255.255.255.254  and  255.255.255.255
];

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

export function userName(specifier=null, separators=null) {
  const userNameSeparator = itemFromCollection(separators || ['.', '_']);
  if (typeof specifier === 'string') {
    return shuffle(specifier.match(/\w+/g).map(x => x)).join(userNameSeparator);
  }
  const firstName = itemFromCollection(nameData['firstNames']).toLowerCase();
  const lastName = itemFromCollection(nameData['lastNames']).toLowerCase();
  return itemFromCollection([
    firstName,
    [firstName, lastName].join(userNameSeparator)
  ]);
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
  return [
    randomNumber(2, 254),
    randomNumber(2, 254),
    randomNumber(2, 254),
    randomNumber(2, 254)
  ].join('.');
}

export function privateIPV4Address() {
  let addr;
  do { addr = ipV4Address(); } while (!privateNetChecker(addr));
  return addr;
}

export function publicIPV4Address() {
  let addr;
  do { addr = ipV4Address(); } while (reservedNetChecker(addr));
  return addr;
}

export function ipV4CIDR() {
  return `${ipV4Address()}/${randomNumber(1, 31)}`;
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

export function slug(words='', glue='') {
  return (words || [...Array(2).keys()].map(_ => itemFromCollection(loremData['words'])).join(' '))
    .replace(/\s+/g, glue || itemFromCollection(['-', '_', '.']))
    .toLowerCase();
}

function privateNetChecker(addr) {
  return PRIVATE_NET_REGEX.some(x => addr.match(x));
}

function reservedNetChecker(addr) {
  return [...PRIVATE_NET_REGEX, ...RESERVED_NETS_REGEX].some(x => addr.match(x));
}
