import data from '../data/date.json';
import { leftPad } from './text-helpers';

export function format(date: Date, format: string): string {
  return format
    .replace(/ss/, leftPad(''+date.getSeconds(), 2, '0'))
    .replace(/s/, ''+date.getSeconds())
    .replace(/dd/, leftPad(''+date.getDate(), 2, '0'))
    .replace(/d/, ''+date.getDate())
    .replace(/mm/, leftPad(''+date.getMinutes(), 2, '0'))
    .replace(/m/, ''+date.getMinutes())
    .replace(/MMMM/, data['months'][date.getMonth()])
    .replace(/MMM/, data['months'][date.getMonth()].substring(0, 3))
    .replace(/MM/, leftPad(''+(date.getMonth() + 1), 2, '0'))
    .replace(/M(?![ao])/, ''+(date.getMonth() + 1))
    .replace(/DD/, data['days'][date.getDay()])
    .replace(/D(?!e)/, data['days'][date.getDay()].substring(0, 3))
    .replace(/yyyy/i, ''+date.getFullYear())
    .replace(/yy/i, (''+date.getFullYear()).substring(2))
    .replace(/HH/, leftPad(''+date.getHours(), 2, '0'))
    .replace(/H/, ''+date.getHours());
}
