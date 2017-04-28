'use strict';
const expect = require('chai').expect;
const Business = require('../../src/faker/business');
const data = require('../../data/business.json');

describe('Business', () => {
  describe('#creditCardNumber', () => {
    it('should return a string', () => {
      expect(Business.creditCardNumber()).to.be.a('string');
    });

    it('should return a credit card number', () => {
      expect(Business.creditCardNumber()).to.be.oneOf(data['creditCardNumbers']);
    });
  });

  describe('#creditCardExpiryDate', () => {
    it('should return a date', () => {
      expect(Business.creditCardExpiryDate()).to.be.a('date');
    });

    it('should return a date in the future', () => {
      expect(Business.creditCardExpiryDate()).to.be.above(new Date());
    });
  });

  describe('#creditCardType', () => {
    it('should return a string', () => {
      expect(Business.creditCardType()).to.be.a('string');
    });

    it('should return a credit card type', () => {
      expect(Business.creditCardType()).to.be.oneOf(data['creditCardTypes']);
    });
  });
});
