'use strict';
const expect = require('chai').expect;
const StarWars = require('../../src/faker/star-wars');
const data = require('../../data/star-wars.json');

describe('StarWars', () => {
  describe('#character', () => {
    it('should return a character', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(StarWars.character()).to.be.oneOf(data['characters']);
      });
    });
  });

  describe('#droid', () => {
    it('should return a droid', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(StarWars.droid()).to.be.oneOf(data['droids']);
      });
    });
  });

  describe('#planet', () => {
    it('should return a planet', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(StarWars.planet()).to.be.oneOf(data['planets']);
      });
    });
  });

  describe('#quote', () => {
    it('should return a quote', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(StarWars.quote()).to.be.oneOf(data['quotes']);
      });
    });
  });

  describe('#specie', () => {
    it('should return a specie', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(StarWars.specie()).to.be.oneOf(data['species']);
      });
    });
  });

  describe('#vehicle', () => {
    it('should return a vehicle', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(StarWars.vehicle()).to.be.oneOf(data['vehicles']);
      });
    });
  });

  describe('#wookieSentence', () => {
    it('should return wookie words', () => {
      StarWars.wookieSentence()
        .split(/(?:\s|[.?!])/) // remove endings
        .filter(x => x)
        .forEach(word => {
          expect(word.toLowerCase()).to.be.oneOf(data['wookieWords']);
        });
    });

    it('should start with a capital letter', () => {
      expect(StarWars.wookieSentence()).to.match(/^[A-Z]/);
    });

    it('should end with period, question mark or explanation mark', () => {
      expect(StarWars.wookieSentence()).to.match(/[.?!]$/);
    });
  });
});
