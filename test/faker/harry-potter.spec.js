'use strict';
const expect = require('chai').expect;
const HarryPotter = require('../../src/faker/harry-potter');
const data = require('../../data/harry-potter.json');

describe('HarryPotter', () => {
  describe('#character', () => {
    it('should return a character', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(HarryPotter.character()).to.be.oneOf(data['characters']);
      });
    });
  });

  describe('#location', () => {
    it('should return a location', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(HarryPotter.location()).to.be.oneOf(data['locations']);
      });
    });
  });

  describe('#quote', () => {
    it('should return a quote', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(HarryPotter.quote()).to.be.oneOf(data['quotes']);
      });
    });
  });

  describe('#book', () => {
    it('should return a book', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(HarryPotter.book()).to.be.oneOf(data['books']);
      });
    });
  });
});
