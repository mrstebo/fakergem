export const ALL = 'ALL';
export const DAY = 'DAY';
export const NIGHT = 'NIGHT';
export const MORNING = 'MORNING';
export const AFTERNOON = 'AFTERNOON';
export const EVENING = 'EVENING';
export const MIDNIGHT = 'MIDNIGHT';
export const BETWEEN = 'BETWEEN';

const TIME_RANGES = {
  [ALL]: { start: 0, end: 23 },
  [DAY]: { start: 9, end: 17 },
  [NIGHT]: { start: 18, end: 23 },
  [MORNING]: { start: 6, end: 11 },
  [AFTERNOON]: { start: 12, end: 17 },
  [EVENING]: { start: 17, end: 21 },
  [MIDNIGHT]: { start: 0, end: 4 }
};

export function between(from, to, period=ALL, format=null) {
  const date = dateBetween(from, to);
  const time = dateWithRandomTime(date, period);
  return timeWithFormat(time, format);
}

export function forward(days=365, period=ALL, format=null) {
  const from = daysFromNow(1);
  const to = daysFromNow(days);
  const date = dateBetween(from, to);
  const time = dateWithRandomTime(date, period);
  return timeWithFormat(time, format);
}

export function backward(days=365, period=ALL, format=null) {
  const from = daysFromNow(-days);
  const to = daysFromNow(-1);
  const date = dateBetween(from, to);
  const time = dateWithRandomTime(date, period);
  return timeWithFormat(time, format);
}

function dateBetween(from, to) {
  const fromMilli = Date.parse(from);
  const toMilli = Date.parse(to);
  const offset = Math.floor(Math.random() * (toMilli - fromMilli));
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
  const  monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ];
  const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
  ];
  if (!format) {
    return time;
  }
  return format
    .replace('ss', pad(time.getSeconds(), 2))
    .replace('s', time.getSeconds())
    .replace('dd', pad(time.getDate(), 2))
    .replace('d', time.getDate())
    .replace('mm', pad(time.getMinutes(), 2))
    .replace('m', time.getMinutes())
    .replace('MMMM', monthNames[time.getMonth()])
    .replace('MMM', monthNames[time.getMonth()].substring(0, 3))
    .replace('MM', pad(time.getMonth() + 1, 2))
    .replace(/M(?![ao])/, time.getMonth() + 1)
    .replace('DD', days[time.getDay()])
    .replace(/D(?!e)/, days[time.getDay()].substring(0, 3))
    .replace('yyyy', time.getFullYear())
    .replace('YYYY', time.getFullYear())
    .replace('yy', (time.getFullYear()+'').substring(2))
    .replace('YY', (time.getFullYear()+'').substring(2))
    .replace('HH', pad(time.getHours(), 2))
    .replace('H', time.getHours());
}

function hours(period) {
  const range = TIME_RANGES[period];
  return range.start + Math.floor(Math.random() * range.end);
}

function minutes() {
  return Math.floor(Math.random() * 59);
}

function seconds() {
  return Math.floor(Math.random() * 59);
}

function daysFromNow(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d;
}

function pad(text, length) {
  let padding = [...Array(length)].map(_ => '0').join('');
  return (padding + text).slice(-length);
}
