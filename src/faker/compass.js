import { itemFromCollection } from '../utils/random';

const data = require('../../data/compass.json');

function parse(compass, text) {
  return text
    .replace(/#\{cardinal\}/, compass.cardinal())
    .replace(/#\{ordinal\}/, compass.ordinal())
    .replace(/#\{halfWind\}/, compass.halfWind())
    .replace(/#\{quarterWind\}/, compass.quarterWind())
    .replace(/#\{cardinalAbbreviation\}/, compass.cardinalAbbreviation())
    .replace(/#\{ordinalAbbreviation\}/, compass.ordinalAbbreviation())
    .replace(/#\{halfWindAbbreviation\}/, compass.halfWindAbbreviation())
    .replace(/#\{quarterWindAbbreviation\}/, compass.quarterWindAbbreviation())
    .replace(/#\{cardinalAzimuth\}/, compass.cardinalAzimuth())
    .replace(/#\{ordinalAzimuth\}/, compass.ordinalAzimuth())
    .replace(/#\{halfWindAzimuth\}/, compass.halfWindAzimuth())
    .replace(/#\{quarterWindAzimuth\}/, compass.quarterWindAzimuth());
}

export default class Compass {
  constructor(faker) {
    this.faker = faker;
  }

  direction() {
    return parse(this, itemFromCollection(data['directions']));
  }

  cardinal() {
    return itemFromCollection(data['cardinals']['word']);
  }

  ordinal() {
    return itemFromCollection(data['ordinals']['word']);
  }

  halfWind() {
    return itemFromCollection(data['halfWinds']['word']);
  }

  quarterWind() {
    return itemFromCollection(data['quarterWinds']['word']);
  }

  abbreviation() {
    return parse(this, itemFromCollection(data['abbreviations']));
  }

  cardinalAbbreviation() {
    return itemFromCollection(data['cardinals']['abbreviation']);
  }

  ordinalAbbreviation() {
    return itemFromCollection(data['ordinals']['abbreviation']);
  }

  halfWindAbbreviation() {
    return itemFromCollection(data['halfWinds']['abbreviation']);
  }

  quarterWindAbbreviation() {
    return itemFromCollection(data['quarterWinds']['abbreviation']);
  }

  azimuth() {
    return parse(this, itemFromCollection(data['azimuths']));
  }

  cardinalAzimuth() {
    return itemFromCollection(data['cardinals']['azimuth']);
  }

  ordinalAzimuth() {
    return itemFromCollection(data['ordinals']['azimuth']);
  }

  halfWindAzimuth() {
    return itemFromCollection(data['halfWinds']['azimuth']);
  }

  quarterWindAzimuth() {
    return itemFromCollection(data['quarterWinds']['azimuth']);
  }
}
