function Boolean() {

  /**
   * @param {number} trueRatio
   * @returns {boolean}
   */
  this.boolean = function(trueRatio=0.5) {
    return Math.random() < trueRatio;
  };

}

module.exports = Boolean;
