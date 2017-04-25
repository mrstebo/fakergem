const data = require('../../data/date.json');

export function format(date, format) {
  return format
    .replace('ss', pad(date.getSeconds(), 2))
    .replace('s', date.getSeconds())
    .replace('dd', pad(date.getDate(), 2))
    .replace('d', date.getDate())
    .replace('mm', pad(date.getMinutes(), 2))
    .replace('m', date.getMinutes())
    .replace('MMMM', data['months'][date.getMonth()])
    .replace('MMM', data['months'][date.getMonth()].substring(0, 3))
    .replace('MM', pad(date.getMonth() + 1, 2))
    .replace(/M(?![ao])/, date.getMonth() + 1)
    .replace('DD', data['days'][date.getDay()])
    .replace(/D(?!e)/, data['days'][date.getDay()].substring(0, 3))
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
