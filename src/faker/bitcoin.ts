import { Faker } from '../faker';
import crypto from 'crypto';
import bs58 from 'bs58';

const PROTOCOL_VERSION = {
  main: 0,
  testnet: 111,
};

function addressFor(network) {
  const version = PROTOCOL_VERSION[network];
  const packed = String.fromCharCode(version) + crypto.randomBytes(20);
  const checksum = digest(digest(packed)).slice(0, 3);
  return base58(`${packed}${checksum}`);
}

function digest(text) {
  const hash = crypto.createHash('sha256');
  return hash.digest(text);
}

function base58(text) {
  return bs58.encode(new Buffer(text, 'ascii'));
}

export class Bitcoin {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  address(): string {
    return addressFor('main');
  }

  testnetAddress(): string {
    return addressFor('testnet');
  }
}