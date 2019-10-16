import { Faker } from '../faker';
import data from '../../data/vehicle.json';

export class Vehicle {
  private VIN_CHARS: string = '0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ';
  private VIN_MAP: string = '0123456789X';
  private VIN_WEIGHTS: string = '8765432X098765432';

  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  vin(): string {
    const details = this.faker.Random.element(data.manufactures.map(x => ({ wmi: x[1], wmiExt: x[2] })));
    const vin = Array(14)
      .map(_ => this.faker.Random.element(this.VIN_CHARS.split('').filter(x => x != '.')))
      .join('');

    let buffer = `${details.wmi}${vin}`.split('');

    if (details.wmiExt) {
      Array(2).map(i => {
        buffer[i + 12] = details.wmiExt[i];
      });
    }

    buffer[10] = this.faker.Random.element(data.years);
    buffer[8] = this.vinChecksum(buffer);

    return buffer.join('');
  }

  manufacture(): string {
    return this.faker.Random.element(data.manufactures.map(x => x[0]));
  }

  private vinChecksum(buffer: Array<string>): string {
    return this.VIN_MAP[<any>buffer.map((c, i) => this.calculateVinWeight(c, i)) % 11];
  }

  private calculateVinWeight(character: string, i: number): number {
    return (this.VIN_CHARS.indexOf(character) % 10) * this.VIN_MAP.indexOf(this.VIN_WEIGHTS[i]);
  }
}
