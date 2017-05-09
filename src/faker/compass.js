import { itemFromCollection } from '../utils/random';

const data = require('../../data/compass.json');

export function direction() {
  return parse(itemFromCollection(data['directions']));
}

export function cardinal() {
  return itemFromCollection(data['cardinals']['word']);
}

export function ordinal() {
  return itemFromCollection(data['ordinals']['word']);
}

export function halfWind() {
  return itemFromCollection(data['halfWinds']['word']);
}

export function quarterWind() {
  return itemFromCollection(data['quarterWinds']['word']);
}

export function abbreviation() {
  return parse(itemFromCollection(data['abbreviations']));
}

export function cardinalAbbreviation() {
  return itemFromCollection(data['cardinals']['abbreviation']);
}

export function ordinalAbbreviation() {
  return itemFromCollection(data['ordinals']['abbreviation']);
}

export function halfWindAbbreviation() {
  return itemFromCollection(data['halfWinds']['abbreviation']);
}

export function quarterWindAbbreviation() {
  return itemFromCollection(data['quarterWinds']['abbreviation']);
}

export function azimuth() {
  return parse(itemFromCollection(data['azimuths']));
}

export function cardinalAzimuth() {
  return itemFromCollection(data['cardinals']['azimuth']);
}

export function ordinalAzimuth() {
  return itemFromCollection(data['ordinals']['azimuth']);
}

export function halfWindAzimuth() {
  return itemFromCollection(data['halfWinds']['azimuth']);
}

export function quarterWindAzimuth() {
  return itemFromCollection(data['quarterWinds']['azimuth']);
}

function parse(text) {
  return text
    .replace(/#\{cardinal\}/, cardinal())
    .replace(/#\{ordinal\}/, ordinal())
    .replace(/#\{halfWind\}/, halfWind())
    .replace(/#\{quarterWind\}/, quarterWind())
    .replace(/#\{cardinalAbbreviation\}/, cardinalAbbreviation())
    .replace(/#\{ordinalAbbreviation\}/, ordinalAbbreviation())
    .replace(/#\{halfWindAbbreviation\}/, halfWindAbbreviation())
    .replace(/#\{quarterWindAbbreviation\}/, quarterWindAbbreviation())
    .replace(/#\{cardinalAzimuth\}/, cardinalAzimuth())
    .replace(/#\{ordinalAzimuth\}/, ordinalAzimuth())
    .replace(/#\{halfWindAzimuth\}/, halfWindAzimuth())
    .replace(/#\{quarterWindAzimuth\}/, quarterWindAzimuth());
}
