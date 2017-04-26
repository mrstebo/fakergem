'use strict';
const expect = require('chai').expect;
const Beer = require('../../src/faker/beer');
const data = require('../../data/beer.json');

describe('Beer', () => {
  describe('#name', () => {
    it('should return a string', () => {
      expect(Beer.name()).to.be.a('string');
    });

    it('should return a name', () => {
      expect(Beer.name()).to.be.oneOf(data['names']);
    });
  });

  describe('#style', () => {
    it('should return a string', () => {
      expect(Beer.style()).to.be.a('string');
    });

    it('should return a name', () => {
      expect(Beer.style()).to.be.oneOf(data['styles']);
    });
  });

  describe('#hop', () => {
    it('should return a string', () => {
      expect(Beer.hop()).to.be.a('string');
    });

    it('should return a name', () => {
      expect(Beer.hop()).to.be.oneOf(data['hops']);
    });
  });

  describe('#yeast', () => {
    it('should return a string', () => {
      expect(Beer.yeast()).to.be.a('string');
    });

    it('should return a name', () => {
      expect(Beer.yeast()).to.be.oneOf(data['yeasts']);
    });
  });

  describe('#malt', () => {
    it('should return a string', () => {
      expect(Beer.malt()).to.be.a('string');
    });

    it('should return a name', () => {
      expect(Beer.malt()).to.be.oneOf(data['malts']);
    });
  });

  describe('#ibu', () => {
    it('should return a string', () => {
      expect(Beer.ibu()).to.be.a('string');
    });

    it('should return a number with IBU suffix', () => {
      expect(Beer.ibu()).to.match(/^(?:\d{2}|\d{3}) IBU/);
    });
  });

  describe('#alcohol', () => {
    it('should return a string', () => {
      expect(Beer.alcohol()).to.be.a('string');
    });

    it('should return a decimal number with a % suffix', () => {
      expect(Beer.alcohol()).to.match(/(?:\d|\d{2})\.\d%/);
    });
  });

  describe('#blg', () => {
    it('should return a string', () => {
      expect(Beer.blg()).to.be.a('string');
    });

    it('should return a number with a °Blg suffix', () => {
      expect(Beer.blg()).to.match(/(?:\d|\d{2}\.\d°Blg)/);
    });
  });
});
