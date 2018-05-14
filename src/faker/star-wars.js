import { randomNumber, itemFromCollection } from '../utils/random';

const data = require('../../data/star-wars.json');

function capitalize(text) {
  return text.replace(/\b\w/, x => x.toUpperCase());
}

export default class StarWars {
  constructor(faker) {
    this.faker = faker;
  }

  character() {
    return itemFromCollection(data['characters']);
  }

  droid() {
    return itemFromCollection(data['droids']);
  }

  planet() {
    return itemFromCollection(data['planets']);
  }

  quote() {
    return itemFromCollection(data['quotes']);
  }

  specie() {
    return itemFromCollection(data['species']);
  }

  vehicle() {
    return itemFromCollection(data['vehicles']);
  }

  wookieSentence() {
    return capitalize(
      [...Array(randomNumber(1, 10)).keys()]
        .map(_ =>  itemFromCollection(data['wookieWords']))
        .join(' ') + itemFromCollection(['.', '?', '!'])
    );
  }
}
