'use strict';
const expect = require('chai').expect;
const Bank = require('../../src/faker/bank');
const data = require('../../data/bank.json');

describe('Bank', () => {
  describe('#name', () => {
    it('should return a bank name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Bank.name()).to.be.oneOf(data['names']);
      });
    });
  });

  describe('#swiftBic', () => {
    it('should return a swift bic', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Bank.swiftBic()).to.be.oneOf(data['swiftBics']);
      });
    });
  });

  describe('#iban', () => {
    it('should return an IBAN', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Bank.iban('GB')).to.match(/^GB\d{2}\w{4}\d{14}$/);
      });
    });
  });
});
