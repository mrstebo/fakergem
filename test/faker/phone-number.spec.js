'use strict';
const expect = require('chai').expect;
const PhoneNumber = require('../../src/faker/phone-number');

describe('PhoneNumber', () => {
  describe('#phoneNumber', () => {

  });

  describe('#cellPhone', () => {

  });

  describe('#areaCode', () => {

  });

  describe('#exchangeCode', () => {

  });

  describe('#subscriberNumber', () => {
    it('should return a number with a default length', () => {
      expect(PhoneNumber.subscriberNumber()).to.match(/^\d{4}$/);
    });

    it('should return a number with the specified length', () => {
      expect(PhoneNumber.subscriberNumber(10)).to.match(/^\d{10}$/);
    });
  });

  describe('#extension', () => {
    it('should return a number with a default length', () => {
      expect(PhoneNumber.extension()).to.match(/^\d{4}$/);
    });

    it('should return a number with the specified length', () => {
      expect(PhoneNumber.extension(10)).to.match(/^\d{10}$/);
    });
  });
});
