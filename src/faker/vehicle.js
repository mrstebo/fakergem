const data = require("../../data/vehicle.json");

const VIN_CHARS = "0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ";
const VIN_MAP = "0123456789X";
const VIN_WEIGHTS = "8765432X098765432";

function vinChecksum(buffer) {
  return VIN_MAP[buffer.map((c, i) => calculateVinWeight(c, i)) % 11];
}

function calculateVinWeight(character, i) {
  (VIN_CHARS.indexOf(character) % 10) * VIN_MAP.indexOf(VIN_WEIGHTS[i]);
}

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Vehicle(faker) {

  /**
   * @returns {string}
   */
  this.vin = function() {
    const details = faker.Random.element(
      data["manufactures"].map(x => ({ wmi: x[1], wmiExt: x[2] }))
    );
    const vin = [...Array(14).keys()]
      .map(() => faker.Random.element(VIN_CHARS.split("").filter(x => x != ".")))
      .join("");

    let buffer = `${details.wmi}${vin}`.split("");

    if (details.wmiExt) {
      [...Array(2).keys()].map(i => {
        buffer[i+12] = details.wmiExt[i];
      });
    }

    buffer[10] = faker.Random.element(data["years"]);
    buffer[8] = vinChecksum(buffer);

    return buffer.join("");
  };

  /**
   * @returns {string}
   */
  this.manufacture = function() {
    return faker.Random.element(data["manufactures"].map(x => x[0]));
  };

}

module.exports = Vehicle;
