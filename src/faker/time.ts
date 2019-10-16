import { Faker } from '../faker';
import { format as formatDate } from '../utils/date-helper';

const ALL = 'ALL';
const DAY = 'DAY';
const NIGHT = 'NIGHT';
const MORNING = 'MORNING';
const AFTERNOON = 'AFTERNOON';
const EVENING = 'EVENING';
const MIDNIGHT = 'MIDNIGHT';
const BETWEEN = 'BETWEEN';

const TIME_RANGES = {
  [ALL]: { start: 0, end: 23 },
  [DAY]: { start: 9, end: 17 },
  [NIGHT]: { start: 18, end: 23 },
  [MORNING]: { start: 6, end: 11 },
  [AFTERNOON]: { start: 12, end: 17 },
  [EVENING]: { start: 17, end: 21 },
  [MIDNIGHT]: { start: 0, end: 4 },
};

function rangeFor(period) {
  const range = TIME_RANGES[period];
  if (!range) {
    throw new Error('invalid period: ' + period);
  }
  return range;
}

function timeWithFormat(time, format) {
  if (!format) return time;
  return formatDate(time, format);
}

function daysFromNow(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d;
}
export class Time {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  get ALL() {
    return ALL;
  }
  get DAY() {
    return DAY;
  }
  get NIGHT() {
    return NIGHT;
  }
  get MORNING() {
    return MORNING;
  }
  get AFTERNOON() {
    return AFTERNOON;
  }
  get EVENING() {
    return EVENING;
  }
  get MIDNIGHT() {
    return MIDNIGHT;
  }
  get BETWEEN() {
    return BETWEEN;
  }

  between(from, to, period = ALL, format = null) {
    const date = this.faker.Date.between(from, to);
    const time =
      period === BETWEEN
        ? date
        : new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            this.faker.Number.between(rangeFor(period).start, rangeFor(period).end),
            this.faker.Number.between(0, 59),
            this.faker.Number.between(0, 59),
          );
    return timeWithFormat(time, format);
  }

  forward(days = 365, period = ALL, format = null) {
    const from = daysFromNow(1);
    const to = daysFromNow(days);
    const date = this.faker.Date.between(from, to);
    const range = rangeFor(period);
    const time = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      this.faker.Number.between(range.start, range.end),
      this.faker.Number.between(0, 59),
      this.faker.Number.between(0, 59),
    );
    return timeWithFormat(time, format);
  }

  backward(days = 365, period = ALL, format = null) {
    const from = daysFromNow(-days);
    const to = daysFromNow(-1);
    const date = this.faker.Date.between(from, to);
    const range = rangeFor(period);
    const time = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      this.faker.Number.between(range.start, range.end),
      this.faker.Number.between(0, 59),
      this.faker.Number.between(0, 59),
    );
    return timeWithFormat(time, format);
  }
}
