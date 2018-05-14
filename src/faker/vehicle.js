import { itemFromCollection } from '../utils/random';

const data = require('../../data/vehicle.json');

const VIN_CHARS = '0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ';
const VIN_MAP = '0123456789X';
const VIN_WEIGHTS = '8765432X098765432';

function vinChar() {
  return itemFromCollection(VIN_CHARS.split('').filter(x => x != '.'));
}

function year() {
  return itemFromCollection(data['years']);
}

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
    const details = itemFromCollection(data['manufactures'].map(x => {
      return {wmi: x[1], wmiExt: x[2]};
    }));

    let buffer = `${details.wmi}${[...Array(14).keys()].map(_ => vinChar()).join('')}`.split('');

    if (details.wmiExt) {
      [...Array(2).keys()].map(i => {
        buffer[i+12] = details.wmiExt[i];
      });
    }

    buffer[10] = year();
    buffer[8] = vinChecksum(buffer);

    return buffer.join('');
  }

  manufacture() {
    return itemFromCollection(data['manufactures'].map(x => x[0]));
  }
}
