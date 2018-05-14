'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/cat.json');

describe('Cat', () => {
  describe('#name', () => {
    it('should return a name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Cat.name()).to.be.oneOf(data['names']);
      });
    });
  });

  describe('#breed', () => {
    it('should return a breed', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Cat.breed()).to.be.oneOf(data['breeds']);
      });
    });
  });

  describe('#registry', () => {
    it('should return a registry', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Cat.registry()).to.be.oneOf(data['registries']);
      });
    });
  });
});
