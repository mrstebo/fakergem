const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export function format(date, format) {
  return format
    .replace('ss', pad(date.getSeconds(), 2))
    .replace('s', date.getSeconds())
    .replace('dd', pad(date.getDate(), 2))
    .replace('d', date.getDate())
    .replace('mm', pad(date.getMinutes(), 2))
    .replace('m', date.getMinutes())
    .replace('MMMM', MONTHS[date.getMonth()])
    .replace('MMM', MONTHS[date.getMonth()].substring(0, 3))
    .replace('MM', pad(date.getMonth() + 1, 2))
    .replace(/M(?![ao])/, date.getMonth() + 1)
    .replace('DD', DAYS[date.getDay()])
    .replace(/D(?!e)/, DAYS[date.getDay()].substring(0, 3))
    .replace('yyyy', date.getFullYear())
    .replace('YYYY', date.getFullYear())
    .replace('yy', (date.getFullYear()+'').substring(2))
    .replace('YY', (date.getFullYear()+'').substring(2))
    .replace('HH', pad(date.getHours(), 2))
    .replace('H', date.getHours());
}

function pad(text, length) {
  let padding = [...Array(length)].map(_ => '0').join('');
  return (padding + text).slice(-length);
}
