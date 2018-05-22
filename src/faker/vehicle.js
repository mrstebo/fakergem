const data = require('../../data/vehicle.json');

const VIN_CHARS = '0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ';
const VIN_MAP = '0123456789X';
const VIN_WEIGHTS = '8765432X098765432';

function vinChecksum(buffer) {
  return VIN_MAP[buffer.map((c, i) => calculateVinWeight(c, i)) % 11];
}

function calculateVinWeight(character, i) {
  (VIN_CHARS.indexOf(character) % 10) * VIN_MAP.indexOf(VIN_WEIGHTS[i]);
}

export default class Vehicle {
  constructor(faker) {
    this.faker = faker;
  }

  vin() {
    const details = this.faker.Random.element(
      data['manufactures'].map(x => ({wmi: x[1], wmiExt: x[2]}))
    );
    const vin = [...Array(14).keys()]
      .map(_ => this.faker.Random.element(VIN_CHARS.split('').filter(x => x != '.')))
      .join('');

    let buffer = `${details.wmi}${vin}`.split('');

    if (details.wmiExt) {
      [...Array(2).keys()].map(i => {
        buffer[i+12] = details.wmiExt[i];
      });
    }

    buffer[10] = this.faker.Random.element(data['years']);
    buffer[8] = vinChecksum(buffer);

    return buffer.join('');
  }

  manufacture() {
    return this.faker.Random.element(data['manufactures'].map(x => x[0]));
  }
}
