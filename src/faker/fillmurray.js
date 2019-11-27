function isValidNumber(value) {
  return /^\d+$/.test(value);
}

function isValidBoolean(value) {
  return /(true|false)/.test(value);
}

function Fillmurray() {

  /**
   * @param {boolean} grayscale
   * @param {number} width
   * @param {number} height
   * @returns {string}
   */
  this.image = function(grayscale=false, width=200, height=200) {
    if (!isValidNumber(width)) {
      throw new Error("Width should be a number");
    }
    if (!isValidNumber(height)) {
      throw new Error("Height should be a number");
    }
    if (!isValidBoolean(grayscale)) {
      throw new Error("Grayscale should be a boolean");
    }

    return [
      "https://fillmurray.com",
      grayscale ? "g" : null,
      width,
      height,
    ].filter(x => x).join("/");
  };

}

module.exports = Fillmurray;
