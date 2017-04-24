'use strict';
const expect = require('chai').expect;
const Superhero = require('../../src/faker/superhero');
const data = require('../../data/superhero.json');

describe('Superhero', () => {
  describe('#name', () => {
    it('should return a string', () => {
      expect(Superhero.name()).to.be.a('string');
    });

    it('should return a formatted name', () => {
      expect(Superhero.name()).not.to.be.oneOf(data['names']);
    });

    it('should replace placeholders', () => {
      expect(Superhero.name()).not.to.match(/\{prefix\}/);
      expect(Superhero.name()).not.to.match(/\{suffix\}/);
      expect(Superhero.name()).not.to.match(/\{descriptor\}/);
    });
  });

  describe('#power', () => {
    it('should return a string', () => {
      expect(Superhero.power()).to.be.a('string');
    });

    it('should return a power', () => {
      expect(Superhero.power()).to.be.oneOf(data['powers']);
    });
  });

  describe('#prefix', () => {
    it('should return a string', () => {
      expect(Superhero.prefix()).to.be.a('string');
    });

    it('should return a prefix', () => {
      expect(Superhero.prefix()).to.be.oneOf(data['prefixes']);
    });
  });

  describe('#suffix', () => {
    it('should return a string', () => {
      expect(Superhero.suffix()).to.be.a('string');
    });

    it('should return a suffix', () => {
      expect(Superhero.suffix()).to.be.oneOf(data['suffixes']);
    });
  });

  describe('#descriptor', () => {
    it('should return a string', () => {
      expect(Superhero.descriptor()).to.be.a('string');
    });

    it('should return a descriptor', () => {
      expect(Superhero.descriptor()).to.be.oneOf(data['descriptors']);
    });
  });
});
