const data = require("../../data/internet.json");

// 0-9, a-z
const CHARACTERS = [...Array(10).keys()].concat([...Array(26).keys()].map(i => String.fromCharCode(97+i)));
const SYMBOLS = ["!", "@", "#", "$", "%", "^", "&", "*"];
const PRIVATE_NET_REGEX = [
  /^10\./,                                       // 10.0.0.0    – 10.255.255.255
  /^100\.(6[4-9]|[7-9]\d|1[0-1]\d|12[0-7])\./,   // 100.64.0.0  – 100.127.255.255
  /^127\./,                                      // 127.0.0.0   – 127.255.255.255
  /^169\.254\./,                                 // 169.254.0.0 – 169.254.255.255
  /^172\.(1[6-9]|2\d|3[0-1])\./,                 // 172.16.0.0  – 172.31.255.255
  /^192\.0\.0\./,                                // 192.0.0.0   – 192.0.0.255
  /^192\.168\./,                                 // 192.168.0.0 – 192.168.255.255
  /^198\.(1[8-9])\./,                             // 198.18.0.0  – 198.19.255.255
];
const RESERVED_NETS_REGEX = [
  /^0\./,                 // 0.0.0.0      – 0.255.255.255
  /^192\.0\.2\./,         // 192.0.2.0    – 192.0.2.255
  /^192\.88\.99\./,       // 192.88.99.0  – 192.88.99.255
  /^198\.51\.100\./,      // 198.51.100.0 – 198.51.100.255
  /^203\.0\.113\./,       // 203.0.113.0  – 203.0.113.255
  /^(22[4-9]|23\d)\./,    // 224.0.0.0    – 239.255.255.255
  /^(24\d|25[0-5])\./,     // 240.0.0.0    – 255.255.255.254  and  255.255.255.255
];

function privateNetChecker(addr) {
  return PRIVATE_NET_REGEX.some(x => addr.match(x));
}

function reservedNetChecker(addr) {
  return [...PRIVATE_NET_REGEX, ...RESERVED_NETS_REGEX].some(x => addr.match(x));
}

class Internet {

  /**
   *
   * @param {import('../faker').Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  email(name) {
    return [
      this.userName(name),
      this.domainName(),
    ].join("@");
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  freeEmail(name) {
    return [
      this.userName(name),
      this.faker.Random.element(data["freeEmails"]),
    ].join("@");
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  safeEmail(name) {
    return [
      this.userName(name),
      `example.${this.faker.Random.element(["org", "com", "net"])}`,
    ].join("@");
  }

  /**
   * @param {string} specifier
   * @param {string} separators
   * @returns {string}
   */
  userName(specifier=null, separators=null) {
    const userNameSeparator = this.faker.Random.element(separators || [".", "_"]);
    if (typeof specifier === "string") {
      const specifiers = specifier.match(/\w+/g).map(x => x);
      return this.faker.Random
        .assortment(specifiers, specifiers.length)
        .join(userNameSeparator)
        .toLowerCase();
    }
    const firstName = this.faker.Name.firstName();
    const lastName = this.faker.Name.lastName();
    return this.faker.Random.element([
      firstName,
      [firstName, lastName].join(userNameSeparator),
    ]).toLowerCase();
  }

  /**
   * @param {number} minLength
   * @param {number} maxLength
   * @param {boolean} mixCase
   * @param {boolean} specialChars
   * @returns {string}
   */
  password(minLength=8, maxLength=16, mixCase=true, specialChars=false) {
    const diffLength = maxLength - minLength;
    const extraCharacters = this.faker.Number.between(0, diffLength);
    const chars = specialChars ? [...CHARACTERS, ...SYMBOLS] : CHARACTERS;
    return [...Array(minLength + extraCharacters).keys()].reduce((result, val, index) => {
      const c = this.faker.Random.element(chars).toString();
      return result + (mixCase && index % 2 == 0 ? c.toUpperCase() : c);
    }, "");
  }

  /**
   * @returns {string}
   */
  domainName() {
    return [
      this.domainWord(),
      this.domainSuffix(),
    ].join(".");
  }

  /**
   * @param {string} value
   * @returns {string}
   */
  fixUmlauts(value) {
    return (value || "")
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue");
  }

  /**
   * @returns {string}
   */
  domainWord() {
    return this.faker.Name.lastName();
  }

  /**
   * @returns {string}
   */
  domainSuffix() {
    return this.faker.Random.element(data["domainSuffixes"]);
  }

  /**
   * @returns {string}
   */
  ipV4Address() {
    return [
      this.faker.Number.between(2, 254),
      this.faker.Number.between(2, 254),
      this.faker.Number.between(2, 254),
      this.faker.Number.between(2, 254),
    ].join(".");
  }

  /**
   * @returns {string}
   */
  privateIPV4Address() {
    let addr;
    do { addr = this.ipV4Address(); } while (!privateNetChecker(addr));
    return addr;
  }

  /**
   * @returns {string}
   */
  publicIPV4Address() {
    let addr;
    do { addr = this.ipV4Address(); } while (reservedNetChecker(addr));
    return addr;
  }

  /**
   * @returns {string}
   */
  ipV4CIDR() {
    return `${this.ipV4Address()}/${this.faker.Number.between(1, 32)}`;
  }

  /**
   * @returns {string}
   */
  ipV6Address() {
    return [...Array(8).keys()].map(() => this.faker.Number.between(4096, 65535).toString(16)).join(":");
  }

  /**
   * @returns {string}
   */
  ipV6CIDR() {
    return `${this.ipV6Address()}/${this.faker.Number.between(1, 128)}`;
  }

  /**
   * @param {string} prefix
   * @returns {string}
   */
  macAddress(prefix="") {
    const prefixDigits = prefix.split(":").filter(x => x).map(x => parseInt(x, 16));
    const addressDigits = [...Array(6 - prefixDigits.length).keys()].map(() => this.faker.Number.between(0, 255));
    return [...prefixDigits, ...addressDigits].map(x => x.toString(16)).join(":");
  }

  /**
   * @param {string} host
   * @param {string} path
   * @param {string} scheme
   * @returns {string}
   */
  url(host=null, path=null, scheme="http") {
    host = host || this.domainName();
    path = path || `/${this.userName()}`;
    return `${scheme}://${host}${path}`;
  }

  /**
   * @param {string[]} words
   * @param {string} glue
   * @returns {string}
   */
  slug(words=null, glue=null) {
    return (words || this.faker.Lorem.words(2).join(" "))
      .replace(/\s+/g, glue || this.faker.Random.element(["-", "_", "."]))
      .toLowerCase();
  }

}

module.exports = Internet;
