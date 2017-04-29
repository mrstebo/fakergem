'use strict';
const expect = require('chai').expect;
const Cat = require('../../src/faker/cat');
const data = require('../../data/cat.json');

describe('Cat', () => {
  describe('#name', () => {
    it('should return a string', () => {
      expect(Cat.name()).to.be.a('string');
    });

    it('should return a name', () => {
      expect(Cat.name()).to.be.oneOf(data['names']);
    });
  });

  describe('#breed', () => {
    it('should return a string', () => {
      expect(Cat.breed()).to.be.a('string');
    });

    it('should return a breed', () => {
      expect(Cat.breed()).to.be.oneOf(data['breeds']);
    });
  });

  describe('#registry', () => {
    it('should return a string', () => {
      expect(Cat.registry()).to.be.a('string');
    });

    it('should return a registry', () => {
      expect(Cat.registry()).to.be.oneOf(data['registries']);
    });
  });
});
