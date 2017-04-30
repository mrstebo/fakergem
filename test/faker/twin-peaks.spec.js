'use strict';
const expect = require('chai').expect;
const TwinPeaks = require('../../src/faker/twin-peaks');
const data = require('../../data/twin-peaks.json');

describe('TwinPeaks', () => {
  describe('#character', () => {
    it('should return a character', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(TwinPeaks.character()).to.be.oneOf(data['characters']);
      });
    });
  });

  describe('#location', () => {
    it('should return a location', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(TwinPeaks.location()).to.be.oneOf(data['locations']);
      });
    });
  });

  describe('#quote', () => {
    it('should return a quote', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(TwinPeaks.quote()).to.be.oneOf(data['quotes']);
      });
    });
  });
});
