'use strict';
const expect = require('chai').expect;
const RuPaul = require('../../src/faker/ru-paul');
const data = require('../../data/ru-paul.json');

describe('RuPaul', () => {
  describe('#quote', () => {
    it('should return a quote', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(RuPaul.quote()).to.be.oneOf(data['quotes']);
      });
    });
  });
});
