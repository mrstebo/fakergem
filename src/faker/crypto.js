import { itemFromCollection } from '../utils/random';
import crypto from 'crypto';

// 0-9, a-z
const CHARACTERS = [...Array(10).keys()].concat([...Array(26).keys()].map(i => String.fromCharCode(97+i)));

export function md5() {
  const hash = crypto.createHash('md5');
  hash.update(characters(255));
  return hash.digest('hex');
}

export function sha1() {
  const hash = crypto.createHash('sha1');
  hash.update(characters(255));
  return hash.digest('hex');
}

export function sha256() {
  const hash = crypto.createHash('sha256');
  hash.update(characters(255));
  return hash.digest('hex');
}

function characters(charCount) {
  return [...Array(resolveNumber(charCount)).keys()]
    .map(_ => itemFromCollection(CHARACTERS))
    .join('');
}

function resolveNumber(n) {
  return parseInt(n) < 0 ? 0 : parseInt(n);
}
