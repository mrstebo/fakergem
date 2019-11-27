const crypto = require("crypto");

const CHARACTERS = "0123456789abcdefghijklmnopqrstuvwxyz";

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Crypto(faker) {

  /**
   * @returns {string}
   */
  this.md5 = function() {
    const hash = crypto.createHash("md5");
    const array = CHARACTERS.split("");
    const characters = faker.Random.assortment(array, 255).join("");
    hash.update(characters);
    return hash.digest("hex");
  };

  /**
   * @returns {string}
   */
  this.sha1 = function() {
    const hash = crypto.createHash("sha1");
    const array = CHARACTERS.split("");
    const characters = faker.Random.assortment(array, 255).join("");
    hash.update(characters);
    return hash.digest("hex");
  };

  /**
   * @returns {string}
   */
  this.sha256 = function() {
    const hash = crypto.createHash("sha256");
    const array = CHARACTERS.split("");
    const characters = faker.Random.assortment(array, 255).join("");
    hash.update(characters);
    return hash.digest("hex");
  };

}

module.exports = Crypto;
