'use strict';
const expect = require('chai').expect;
const Ancient = require('../../src/faker/ancient');
const data = require('../../data/ancient.json');

describe('Ancient', () => {
  describe('#god', () => {
    it('should return a string', () => {
      expect(Ancient.god()).to.be.a('string');
    });

    it('should return a god', () => {
      expect(Ancient.god()).to.be.oneOf(data['gods']);
    });
  });

  describe('#primordial', () => {
    it('should return a string', () => {
      expect(Ancient.primordial()).to.be.a('string');
    });

    it('should return a primordial', () => {
      expect(Ancient.primordial()).to.be.oneOf(data['primordials']);
    });
  });

  describe('#titan', () => {
    it('should return a string', () => {
      expect(Ancient.titan()).to.be.a('string');
    });

    it('should return a titan', () => {
      expect(Ancient.titan()).to.be.oneOf(data['titans']);
    });
  });

  describe('#hero', () => {
    it('should return a string', () => {
      expect(Ancient.hero()).to.be.a('string');
    });

    it('should return a hero', () => {
      expect(Ancient.hero()).to.be.oneOf(data['heroes']);
    });
  });
});
