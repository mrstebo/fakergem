/**
 * @param {Date | string} date
 * @returns {Date}
 */
function getDateObject(date) {
  if (typeof(date) == "string") {
    return new Date(Date.parse(date));
  }
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @param {Date} date1
 * @param {Date} date2
 * @returns {boolean}
 */
function datesAreEqual(date1, date2) {
  return date1.getYear() === date2.getYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
}

/**
 * @param {number} n
 * @returns {Date}
 */
function daysFromNow(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  d.setHours(0, 0, 0, 0);
  return d;
}

class DateFaker {

  /**
   *
   * @param {import('../faker').Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  /**
   * @param {Date | string} from
   * @param {Date | string} to
   * @returns {Date}
   */
  between(from, to) {
    const fromTime = getDateObject(from).getTime();
    const toTime = getDateObject(to).getTime();
    const offset = this.faker.Number.between(0, toTime - fromTime);
    const date = new Date(fromTime + offset);
    return getDateObject(date);
  }

  /**
   * @param {Date | string} from
   * @param {Date | string} to
   * @param {Date | string} except
   * @returns {Date}
   */
  betweenExcept(from, to, except) {
    from = getDateObject(from);
    to = getDateObject(to);
    except = getDateObject(except);

    let date = this.between(from, to);
    while (datesAreEqual(date, except)) {
      date = this.between(from, to);
    }
    return getDateObject(date);
  }

  /**
   * @param {number} days
   * @returns {Date}
   */
  forward(days=365) {
    const from = daysFromNow(1);
    const to = daysFromNow(days);
    const date = this.between(from, to);
    return getDateObject(date);
  }

  /**
   * @param {number} days
   * @returns {Date}
   */
  backward(days=365) {
    const from = daysFromNow(-days);
    const to = daysFromNow(-1);
    const date = this.between(from, to);
    return getDateObject(date);
  }

  /**
   * @param {number} minAge
   * @param {number} maxAge
   * @returns {Date}
   */
  birthday(minAge=18, maxAge=65) {
    const from = new Date();
    from.setFullYear(from.getFullYear() - maxAge);
    const to = new Date();
    to.setFullYear(to.getFullYear() - minAge);
    const date = this.between(from, to);
    return getDateObject(date);
  }

}

module.exports = DateFaker;
