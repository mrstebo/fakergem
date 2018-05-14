'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/coffee.json');

describe('Coffee', () => {
  describe('#fact', () => {
    it('should replace placeholders', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Coffee.blendName()).not.to.match(/\{\w+\}/);
      });
    });
  });

  describe('#origin', () => {
    it('should return an origin', () => {
      [...Array(100).keys()].forEach(_ => {
        const origin = Faker.Coffee.origin();
        const region = origin.match(/^(.*),/)[1];
        const country = origin.match(/^.*,\s(.*)$/)[1];
        expect(country).to.be.oneOf(data['countries']);
        expect(region).to.be.oneOf(data['regions'][country.replace(/\s/, '_').toLowerCase()]);
      });
    });
  });

  describe('#variety', () => {
    it('should return a variety', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Coffee.variety()).to.be.oneOf(data['varieties']);
      });
    });
  });

  describe('#notes', () => {
    it('should replace placeholders', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Coffee.notes()).not.to.match(/\{\w+\}/);
      });
    });
  });
});
