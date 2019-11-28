import bs58 from 'bs58';
import crypto, { HexBase64Latin1Encoding } from 'crypto';
import { Faker } from '../faker';

export class Bitcoin {
  private PROTOCOL_VERSION: { [key: string]: number } = {
    main: 0,
    testnet: 111,
  };

  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public address(): string {
    return this.addressFor(this.PROTOCOL_VERSION.main);
  }

  public testnetAddress(): string {
    return this.addressFor(this.PROTOCOL_VERSION.testnet);
  }

  private addressFor(version: number): string {
    const packed = (String.fromCharCode(version) + crypto.randomBytes(20)) as HexBase64Latin1Encoding;
    const packedDigest = this.digest(packed) as HexBase64Latin1Encoding;
    const checksum = this.digest(packedDigest).slice(0, 3);
    return this.base58(`${packed}${checksum}`);
  }

  private digest(text: HexBase64Latin1Encoding): string {
    const hash = crypto.createHash('sha256');
    return hash.digest(text);
  }

  private base58(text: string): string {
    return bs58.encode(new Buffer(text, 'ascii'));
  }
}
