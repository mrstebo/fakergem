const data = require('../../data/compass.json');

function parse(faker, format) {
  const text = format.replace(/\{(\w+)\}/g, m => `{Compass.${m.substring(1)}`);
  return faker.Fake.f(text);
}

export default class Compass {
  constructor(faker) {
    this.faker = faker;
  }

  direction() {
    return parse(this.faker, this.faker.Random.element(data['directions']));
  }

  cardinal() {
    return this.faker.Random.element(data['cardinals']['word']);
  }

  ordinal() {
    return this.faker.Random.element(data['ordinals']['word']);
  }

  halfWind() {
    return this.faker.Random.element(data['halfWinds']['word']);
  }

  quarterWind() {
    return this.faker.Random.element(data['quarterWinds']['word']);
  }

  abbreviation() {
    return parse(this.faker, this.faker.Random.element(data['abbreviations']));
  }

  cardinalAbbreviation() {
    return this.faker.Random.element(data['cardinals']['abbreviation']);
  }

  ordinalAbbreviation() {
    return this.faker.Random.element(data['ordinals']['abbreviation']);
  }

  halfWindAbbreviation() {
    return this.faker.Random.element(data['halfWinds']['abbreviation']);
  }

  quarterWindAbbreviation() {
    return this.faker.Random.element(data['quarterWinds']['abbreviation']);
  }

  azimuth() {
    return parse(this.faker, this.faker.Random.element(data['azimuths']));
  }

  cardinalAzimuth() {
    return this.faker.Random.element(data['cardinals']['azimuth']);
  }

  ordinalAzimuth() {
    return this.faker.Random.element(data['ordinals']['azimuth']);
  }

  halfWindAzimuth() {
    return this.faker.Random.element(data['halfWinds']['azimuth']);
  }

  quarterWindAzimuth() {
    return this.faker.Random.element(data['quarterWinds']['azimuth']);
  }
}
