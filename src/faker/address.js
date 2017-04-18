import data from '../../data/address.json';
import nameData from '../../data/name.json';
import { itemFromCollection, randomNumber } from '../utils/random';

const CITY_FORMATS = [
  '{cityPrefix} {Name.firstName} {citySuffix}',
  '{cityPrefix} {Name.firstName}',
  '{Name.firstName} {citySuffix}',
  '{Name.lastName} {citySuffix}'
];

const STREET_NAME_FORMATS = [
  '{Name.firstName} {streetSuffix}',
  '{Name.lastName} {streetSuffix}'
];

const STREET_ADDRESS_FORMATS = [
  '{buildingNumber} {streetName}'
];

export function city() {
  const format = itemFromCollection(CITY_FORMATS);
  return parseFormat(format);
}

export function streetName() {
  const format = itemFromCollection(STREET_NAME_FORMATS);
  return parseFormat(format);
}

export function streetAddress() {
  const format = itemFromCollection(STREET_ADDRESS_FORMATS);
  return parseFormat(format);
}

export function secondaryAddress() {
  const format = `${itemFromCollection(data['secondaryAddressPrefixes'])} ###`;
  return parseFormat(format);
}

export function buildingNumber() {
  return ''+randomNumber(100, 99999);
}

export function zipCode(stateAbbreviation = '') {
  if (stateAbbreviation == '') {
    return parseFormat(itemFromCollection(data['postcodes']));
  }
  return parseFormat(data['postcodeByState'][stateAbbreviation]);
}

export function zip(stateAbbreviation = '') {
  return zipCode(stateAbbreviation);
}

export function postcode(stateAbbreviation = '') {
  return zipCode(stateAbbreviation);
}

export function timeZone() {
  return itemFromCollection(data['timeZones']);
}

export function streetSuffix() {
  return itemFromCollection(data['streetSuffixes']);
}

export function citySuffix() {
  return itemFromCollection(data['citySuffixes']);
}

export function cityPrefix() {
  return itemFromCollection(data['cityPrefixes']);
}

export function state() {
  return itemFromCollection(data['states']);
}

export function stateAbbr() {
  return itemFromCollection(data['stateAbbreviations']);
}

export function country() {
  return itemFromCollection(data['countries']);
}

export function countryCode() {
  return itemFromCollection(data['countryCodes']);
}

export function latitude() {
  return ''+(randomNumber(0, 180) - 90);
}

export function longitude() {
  return ''+(randomNumber(0, 360) - 180);
}

function parseFormat(format) {
  return format
    .replace(/\{streetSuffix\}/g, streetSuffix())
    .replace(/\{citySuffix\}/g, citySuffix())
    .replace(/\{cityPrefix\}/g, cityPrefix())
    .replace(/\{buildNumber\}/g, buildingNumber())
    .replace(/\{Name\.firstName\}/g, itemFromCollection(nameData['firstNames']))
    .replace(/\{Name\.lastName\}/g, itemFromCollection(nameData['lastNames']))
    .replace(/#/, randomNumber(1, 10))
    .replace(/#/g, _ => randomNumber(0, 10));
}
