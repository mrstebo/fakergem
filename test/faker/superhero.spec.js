'use strict';
const expect = require('chai').expect;
const Superhero = require('../../src/faker/superhero');
const data = require('../../data/superhero.json');

describe('Superhero', () => {
  describe('#name', () => {
    it('should return a formatted name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Superhero.name()).not.to.be.oneOf(data['names']);
      });
    });

    it('should replace placeholders', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Superhero.name()).not.to.match(/\{prefix\}/);
        expect(Superhero.name()).not.to.match(/\{suffix\}/);
        expect(Superhero.name()).not.to.match(/\{descriptor\}/);
      });
    });
  });

  describe('#power', () => {
    it('should return a power', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Superhero.power()).to.be.oneOf(data['powers']);
      });
    });
  });

  describe('#prefix', () => {
    it('should return a prefix', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Superhero.prefix()).to.be.oneOf(data['prefixes']);
      });
    });
  });

  describe('#suffix', () => {
    it('should return a suffix', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Superhero.suffix()).to.be.oneOf(data['suffixes']);
      });
    });
  });

  describe('#descriptor', () => {
    it('should return a descriptor', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Superhero.descriptor()).to.be.oneOf(data['descriptors']);
      });
    });
  });
});
