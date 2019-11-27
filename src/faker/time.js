const { format: formatDate } = require("../utils/date-helper");

const ALL = "ALL";
const DAY = "DAY";
const NIGHT = "NIGHT";
const MORNING = "MORNING";
const AFTERNOON = "AFTERNOON";
const EVENING = "EVENING";
const MIDNIGHT = "MIDNIGHT";
const BETWEEN = "BETWEEN";

const TIME_RANGES = {
  [ALL]: { start: 0, end: 23 },
  [DAY]: { start: 9, end: 17 },
  [NIGHT]: { start: 18, end: 23 },
  [MORNING]: { start: 6, end: 11 },
  [AFTERNOON]: { start: 12, end: 17 },
  [EVENING]: { start: 17, end: 21 },
  [MIDNIGHT]: { start: 0, end: 4 },
};

/**
 * @param {string} period
 * @returns {{ start: number, end: number }}
 */
function rangeFor(period) {
  const range = TIME_RANGES[period];
  if (!range) {
    throw new Error(`invalid period: ${period}`);
  }
  return range;
}

function timeWithFormat(time, format) {
  if (!format) return time;
  return formatDate(time, format);
}

/**
 * @param {number} n
 * @returns {Date}
 */
function daysFromNow(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d;
}

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Time(faker) {

  this.ALL = ALL;
  this.DAY = DAY;
  this.NIGHT = NIGHT;
  this.MORNING = MORNING;
  this.AFTERNOON = AFTERNOON;
  this.EVENING = EVENING;
  this.MIDNIGHT = MIDNIGHT;
  this.BETWEEN = BETWEEN;

  /**
   * @param {Date | string} from
   * @param {Date | string} to
   * @param {string} period
   * @param {string} format
   * @returns {Date}
   */
  this.between = function(from, to, period=ALL, format=null) {
    const date = faker.Date.between(from, to);
    const time = period === BETWEEN
      ? date
      : new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        faker.Number.between(rangeFor(period).start, rangeFor(period).end),
        faker.Number.between(0, 59),
        faker.Number.between(0, 59)
      );
    return timeWithFormat(time, format);
  };

  /**
   * @param {number} days
   * @param {string} period
   * @param {string} format
   * @returns {Date}
   */
  this.forward = function(days=365, period=ALL, format=null) {
    const from = daysFromNow(1);
    const to = daysFromNow(days);
    const date = faker.Date.between(from, to);
    const range = rangeFor(period);
    const time = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      faker.Number.between(range.start, range.end),
      faker.Number.between(0, 59),
      faker.Number.between(0, 59)
    );
    return timeWithFormat(time, format);
  };

  /**
   * @param {number} days
   * @param {string} period
   * @param {string} format
   * @returns {Date}
   */
  this.backward = function(days=365, period=ALL, format=null) {
    const from = daysFromNow(-days);
    const to = daysFromNow(-1);
    const date = faker.Date.between(from, to);
    const range = rangeFor(period);
    const time = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      faker.Number.between(range.start, range.end),
      faker.Number.between(0, 59),
      faker.Number.between(0, 59)
    );
    return timeWithFormat(time, format);
  };

}

module.exports = Time;
