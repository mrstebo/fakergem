'use strict';
const expect = require('chai').expect;
const Beer = require('../../src/faker/beer');
const data = require('../../data/beer.json');

describe('Beer', () => {
  describe('#name', () => {
    it('should return a name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Beer.name()).to.be.oneOf(data['names']);
      });
    });
  });

  describe('#style', () => {
    it('should return a name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Beer.style()).to.be.oneOf(data['styles']);
      });
    });
  });

  describe('#hop', () => {
    it('should return a name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Beer.hop()).to.be.oneOf(data['hops']);
      });
    });
  });

  describe('#yeast', () => {
    it('should return a name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Beer.yeast()).to.be.oneOf(data['yeasts']);
      });
    });
  });

  describe('#malt', () => {
    it('should return a name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Beer.malt()).to.be.oneOf(data['malts']);
      });
    });
  });

  describe('#ibu', () => {
    it('should return a number with IBU suffix', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Beer.ibu()).to.match(/^(?:\d{2}|\d{3}) IBU/);
      });
    });
  });

  describe('#alcohol', () => {
    it('should return a decimal number with a % suffix', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Beer.alcohol()).to.match(/(?:\d|\d{2})\.\d%/);
      });
    });
  });

  describe('#blg', () => {
    it('should return a number with a °Blg suffix', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Beer.blg()).to.match(/(?:\d|\d{2}\.\d°Blg)/);
      });
    });
  });
});
