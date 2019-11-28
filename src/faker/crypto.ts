import crypto from 'crypto';
import { Faker } from '../faker';

export class Crypto {
  private CHARACTERS: string = '0123456789abcdefghijklmnopqrstuvwxyz';

  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public md5(): string {
    const hash = crypto.createHash('md5');
    const array = this.CHARACTERS.split('');
    const characters = this.faker.Random.assortment(array, 255).join('');
    hash.update(characters);
    return hash.digest('hex');
  }

  public sha1(): string {
    const hash = crypto.createHash('sha1');
    const array = this.CHARACTERS.split('');
    const characters = this.faker.Random.assortment(array, 255).join('');
    hash.update(characters);
    return hash.digest('hex');
  }

  public sha256(): string {
    const hash = crypto.createHash('sha256');
    const array = this.CHARACTERS.split('');
    const characters = this.faker.Random.assortment(array, 255).join('');
    hash.update(characters);
    return hash.digest('hex');
  }
}
