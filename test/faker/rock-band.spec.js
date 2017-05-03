'use strict';
const expect = require('chai').expect;
const RockBand = require('../../src/faker/rock-band');
const data = require('../../data/rock-band.json');

describe('RockBand', () => {
  describe('#name', () => {
    it('should return the name of a rock band', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(RockBand.name()).to.be.oneOf(data['names']);
      });
    });
  });
});
