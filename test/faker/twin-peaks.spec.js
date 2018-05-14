'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/twin-peaks.json');

describe('TwinPeaks', () => {
  describe('#character', () => {
    it('should return a character', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.TwinPeaks.character()).to.be.oneOf(data['characters']);
      });
    });
  });

  describe('#location', () => {
    it('should return a location', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.TwinPeaks.location()).to.be.oneOf(data['locations']);
      });
    });
  });

  describe('#quote', () => {
    it('should return a quote', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.TwinPeaks.quote()).to.be.oneOf(data['quotes']);
      });
    });
  });
});
