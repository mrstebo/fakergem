function getDateObject(date) {
  if (typeof(date) == "string") {
    return new Date(Date.parse(date));
  }
  date.setHours(0, 0, 0, 0);
  return date;
}

function datesAreEqual(date1, date2) {
  return date1.getYear() === date2.getYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
}

function daysFromNow(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  d.setHours(0, 0, 0, 0);
  return d;
}

module.exports = class DateFaker {

  /**
   *
   * @param {import("../faker")} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  between(from, to) {
    from = getDateObject(from);
    to = getDateObject(to);

    const fromMilli = Date.parse(from);
    const toMilli = Date.parse(to);
    const offset = this.faker.Number.between(0, toMilli - fromMilli);
    const date = new Date(fromMilli + offset);
    return getDateObject(date);
  }

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

  forward(days=365) {
    const from = daysFromNow(1);
    const to = daysFromNow(days);
    const date = this.between(from, to);
    return getDateObject(date);
  }

  backward(days=365) {
    const from = daysFromNow(-days);
    const to = daysFromNow(-1);
    const date = this.between(from, to);
    return getDateObject(date);
  }

  birthday(minAge=18, maxAge=65) {
    const from = new Date();
    from.setFullYear(from.getFullYear() - maxAge);
    const to = new Date();
    to.setFullYear(to.getFullYear() - minAge);
    const date = this.between(from, to);
    return getDateObject(date);
  }

};
