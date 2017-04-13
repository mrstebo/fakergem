'use strict';
const expect = require('chai').expect;
const RockBand = require('../../src/faker/rock-band');
const data = require('../../data/rock-band.json');

describe('RockBand', () => {
  describe('#name', () => {
    it('should return a string', () => {
      expect(RockBand.name()).to.be.a('string');
    });

    it('should return the name of a rock band', () => {
      expect(RockBand.name()).to.be.oneOf(data['names']);
    });
  });
});
