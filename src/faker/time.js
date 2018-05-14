import {format as formatDate} from '../utils/date-helper';
import { randomNumber } from '../utils/random';

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
  [MIDNIGHT]: { start: 0, end: 4 }
};

function dateBetween(from, to) {
  const fromMilli = Date.parse(from);
  const toMilli = Date.parse(to);
  const offset = randomNumber(0, toMilli - fromMilli);
  const date = new Date(fromMilli + offset);
  date.setHours(0, 0, 0, 0);
  return date;
}

function dateWithRandomTime(date, period) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    hours(period),
    minutes(),
    seconds()
  );
}

function timeWithFormat(time, format) {
  if (!format) {
    return time;
  }
  return formatDate(time, format);
}

function hours(period) {
  const range = TIME_RANGES[period];
  if (!range) {
    throw new Error('invalid period');
  }
  return randomNumber(range.start, range.end);
}

function minutes() {
  return randomNumber(0, 59);
}

function seconds() {
  return randomNumber(0, 59);
}

function daysFromNow(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d;
}
export default class Time {
  constructor(faker) {
    this.faker = faker;
  }

  get ALL() { return ALL; }
  get DAY() { return DAY; }
  get NIGHT() { return NIGHT; }
  get MORNING() { return MORNING; }
  get AFTERNOON() { return AFTERNOON; }
  get EVENING() { return EVENING; }
  get MIDNIGHT() { return MIDNIGHT; }
  get BETWEEN() { return BETWEEN; }
  get TIME_RANGES() { return TIME_RANGES; }

  between(from, to, period=ALL, format=null) {
    const date = dateBetween(from, to);
    const time = period == BETWEEN ? date : dateWithRandomTime(date, period);
    return timeWithFormat(time, format);
  }

  forward(days=365, period=ALL, format=null) {
    const from = daysFromNow(1);
    const to = daysFromNow(days);
    const date = dateBetween(from, to);
    const time = dateWithRandomTime(date, period);
    return timeWithFormat(time, format);
  }

  backward(days=365, period=ALL, format=null) {
    const from = daysFromNow(-days);
    const to = daysFromNow(-1);
    const date = dateBetween(from, to);
    const time = dateWithRandomTime(date, period);
    return timeWithFormat(time, format);
  }
}
