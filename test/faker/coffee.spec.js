'use strict';
const expect = require('chai').expect;
const Coffee = require('../../src/faker/coffee');
const data = require('../../data/coffee.json');

describe('Coffee', () => {
  describe('#fact', () => {
    it('should return a string', () => {
      expect(Coffee.blendName()).to.be.a('string');
    });

    it('should replace placeholders', () => {
      expect(Coffee.blendName()).not.to.match(/\{\w+\}/);
    });
  });

  describe('#origin', () => {
    it('should return a string', () => {
      expect(Coffee.origin()).to.be.a('string');
    });

    it('should return an origin', () => {
      const origin = Coffee.origin();
      const region = origin.split(',')[0].trim();
      const country = origin.split(',')[1].trim();
      expect(country).to.be.oneOf(data['countries']);
      expect(region).to.be.oneOf(data['regions'][country.replace(/\s/, '_').toLowerCase()]);
    });
  });

  describe('#variety', () => {
    it('should return a string', () => {
      expect(Coffee.variety()).to.be.a('string');
    });

    it('should return a variety', () => {
      expect(Coffee.variety()).to.be.oneOf(data['varieties']);
    });
  });

  describe('#notes', () => {
    it('should return a string', () => {
      expect(Coffee.notes()).to.be.a('string');
    });

    it('should replace placeholders', () => {
      expect(Coffee.notes()).not.to.match(/\{\w+\}/);
    });
  });
});
