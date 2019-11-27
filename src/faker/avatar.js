const SUPPORTED_FORMATS = ["png", "jpg", "bmp"];

function isValidSize(size) {
  return /^\d+x\d+$/.test(size);
}

function isFormatSupported(format) {
  return SUPPORTED_FORMATS.indexOf(format) >= 0;
}

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Avatar(faker) {

  /**
   * @param {string} slug
   * @param {string} size
   * @param {string} format
   * @param {string} set
   * @param {string} bgset
   * @returns {string}
   */
  this.image = function(slug=null, size="300x300", format="png", set="set1", bgset=null) {
    if (!isValidSize(size)) {
      throw new Error("Size should be specified in format 300x300");
    }
    if (!isFormatSupported(format)) {
      throw new Error(`Supported formats are ${SUPPORTED_FORMATS.join(", ")}`);
    }
    const filename = `${slug || faker.Lorem.words(3).join("-")}.${format}`;
    const bgsetQuery = bgset ? `&bgset=${bgset}` : "";

    return `https://robohash.org/${filename}?size=${size}&set=${set}${bgsetQuery}`;
  };

}

module.exports = Avatar;
