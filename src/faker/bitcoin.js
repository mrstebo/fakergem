const crypto = require("crypto");
const bs58 = require("bs58");

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
  const hash = crypto.createHash("sha256");
  return hash.digest(text);
}

function base58(text) {
  return bs58.encode(new Buffer(text, "ascii"));
}

class Bitcoin {

  /**
   *
   * @param {import('../faker').Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  /**
   * @returns {string}
   */
  address() {
    return addressFor("main");
  }

  /**
   * @returns {string}
   */
  testnetAddress() {
    return addressFor("testnet");
  }

}

module.exports = Bitcoin;
