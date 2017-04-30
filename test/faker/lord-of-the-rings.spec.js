'use strict';
const expect = require('chai').expect;
const LordOfTheRings = require('../../src/faker/lord-of-the-rings');
const data = require('../../data/lord-of-the-rings.json');

describe('LordOfTheRings', () => {
  describe('#character', () => {
    it('should return a character', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(LordOfTheRings.character()).to.be.oneOf(data['characters']);
      });
    });
  });

  describe('#location', () => {
    it('should return a location', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(LordOfTheRings.location()).to.be.oneOf(data['locations']);
      });
    });
  });
});
