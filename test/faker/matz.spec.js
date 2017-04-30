'use strict';
const expect = require('chai').expect;
const Matz = require('../../src/faker/matz');
const data = require('../../data/matz.json');

describe('Matz', () => {
  describe('#quote', () => {
    it('should return a quote', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Matz.quote()).to.be.oneOf(data['quotes']);
      });
    });
  });
});
