const data = require("../../data/date.json");

/**
 *
 * @param {Date} date
 * @param {string} format
 * @returns {string}
 */
const format = (date, format) => {
  return format
    .replace(/ss/, pad(date.getSeconds()+"", 2))
    .replace(/s/, date.getSeconds()+"")
    .replace(/dd/, pad(date.getDate()+"", 2))
    .replace(/d/, date.getDate()+"")
    .replace(/mm/, pad(date.getMinutes()+"", 2))
    .replace(/m/, date.getMinutes()+"")
    .replace(/MMMM/, data["months"][date.getMonth()])
    .replace(/MMM/, data["months"][date.getMonth()].substring(0, 3))
    .replace(/MM/, pad((date.getMonth() + 1)+"", 2))
    .replace(/M(?![ao])/, (date.getMonth() + 1)+"")
    .replace(/DD/, data["days"][date.getDay()])
    .replace(/D(?!e)/, data["days"][date.getDay()].substring(0, 3))
    .replace(/yyyy/i, date.getFullYear()+"")
    .replace(/yy/i, (date.getFullYear()+"").substring(2))
    .replace(/HH/, pad(date.getHours()+"", 2))
    .replace(/H/, date.getHours()+"");
};

/**
 * @param {string} text
 * @param {number} length
 * @returns {string}
 */
const pad = (text, length) => {
  let padding = [...Array(length)].map(() => "0").join("");
  return (padding + text).slice(-length);
};

module.exports = {
  format,
  pad,
};
