import data from '../../data/star-wars.json';
import { randomNumber, itemFromCollection } from '../utils/random';

export function character() {
  return itemFromCollection(data['characters']);
}

export function droid() {
  return itemFromCollection(data['droids']);
}

export function planet() {
  return itemFromCollection(data['planets']);
}

export function quote() {
  return itemFromCollection(data['quotes']);
}

export function specie() {
  return itemFromCollection(data['species']);
}

export function vehicle() {
  return itemFromCollection(data['vehicles']);
}

export function wookieSentence() {
  return capitalize(
    [...Array(randomNumber(1, 10)).keys()]
      .map(_ =>  itemFromCollection(data['wookieWords']))
      .join(' ') + itemFromCollection(['.', '?', '!'])
  );
}

function capitalize(text) {
  return text.replace(/\b\w/, x => x.toUpperCase());
}
