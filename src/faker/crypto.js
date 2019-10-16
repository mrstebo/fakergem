const crypto = require("crypto");

const CHARACTERS = "0123456789abcdefghijklmnopqrstuvwxyz";

module.exports = class Crypto {

  /**
   *
   * @param {import("../faker")} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  md5() {
    const hash = crypto.createHash("md5");
    const array = CHARACTERS.split("");
    const characters = this.faker.Random.assortment(array, 255).join("");
    hash.update(characters);
    return hash.digest("hex");
  }

  sha1() {
    const hash = crypto.createHash("sha1");
    const array = CHARACTERS.split("");
    const characters = this.faker.Random.assortment(array, 255).join("");
    hash.update(characters);
    return hash.digest("hex");
  }

  sha256() {
    const hash = crypto.createHash("sha256");
    const array = CHARACTERS.split("");
    const characters = this.faker.Random.assortment(array, 255).join("");
    hash.update(characters);
    return hash.digest("hex");
  }

};
