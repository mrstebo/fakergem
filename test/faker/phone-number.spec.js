'use strict';
const expect = require('chai').expect;
const PhoneNumber = require('../../src/faker/phone-number');
const data = require('../../data/phone-number.json');

describe('PhoneNumber', () => {
  describe('#phoneNumber', () => {
    it('should return a phone number with hashes replaced', () => {
      expect(PhoneNumber.phoneNumber()).to.not.match(/[#]/);
    });
  });

  describe('#cellPhone', () => {
    it('should return a cellphone number with hashes replaced', () => {
      expect(PhoneNumber.cellPhone()).to.not.match(/[#]/);
    });
  });

  describe('#areaCode', () => {
    it('should return an area code', () => {
      expect(PhoneNumber.areaCode()).to.be.oneOf(data['areaCodes']);
    });
  });

  describe('#exchangeCode', () => {
    it('should return an exchange code', () => {
      expect(PhoneNumber.exchangeCode()).to.be.oneOf(data['exchangeCodes']);
    });
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
