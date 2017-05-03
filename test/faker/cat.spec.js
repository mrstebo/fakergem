'use strict';
const expect = require('chai').expect;
const Cat = require('../../src/faker/cat');
const data = require('../../data/cat.json');

describe('Cat', () => {
  describe('#name', () => {
    it('should return a name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Cat.name()).to.be.oneOf(data['names']);
      });
    });
  });

  describe('#breed', () => {
    it('should return a breed', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Cat.breed()).to.be.oneOf(data['breeds']);
      });
    });
  });

  describe('#registry', () => {
    it('should return a registry', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Cat.registry()).to.be.oneOf(data['registries']);
      });
    });
  });
});
