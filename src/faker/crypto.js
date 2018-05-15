import crypto from 'crypto';

// 0-9, a-z
const CHARACTERS = [...Array(10).keys()].concat([...Array(26).keys()].map(i => String.fromCharCode(97+i)));

export default class Crypto {
  constructor(faker) {
    this.faker = faker;
  }

  md5() {
    const hash = crypto.createHash('md5');
    const characters = this.faker.Random.assortment(CHARACTERS, 255).join('');
    hash.update(characters);
    return hash.digest('hex');
  }

  sha1() {
    const hash = crypto.createHash('sha1');
    const characters = this.faker.Random.assortment(CHARACTERS, 255).join('');
    hash.update(characters);
    return hash.digest('hex');
  }

  sha256() {
    const hash = crypto.createHash('sha256');
    const characters = this.faker.Random.assortment(CHARACTERS, 255).join('');
    hash.update(characters);
    return hash.digest('hex');
  }
}
