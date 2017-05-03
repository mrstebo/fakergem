'use strict';
const expect = require('chai').expect;
const Business = require('../../src/faker/business');
const data = require('../../data/business.json');

describe('Business', () => {
  describe('#creditCardNumber', () => {
    it('should return a credit card number', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Business.creditCardNumber()).to.be.oneOf(data['creditCardNumbers']);
      });
    });
  });

  describe('#creditCardExpiryDate', () => {
    it('should return a date in the future', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Business.creditCardExpiryDate()).to.be.above(new Date());
      });
    });
  });

  describe('#creditCardType', () => {
    it('should return a credit card type', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Business.creditCardType()).to.be.oneOf(data['creditCardTypes']);
      });
    });
  });
});
