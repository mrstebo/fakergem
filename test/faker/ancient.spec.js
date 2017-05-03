'use strict';
const expect = require('chai').expect;
const Ancient = require('../../src/faker/ancient');
const data = require('../../data/ancient.json');

describe('Ancient', () => {
  describe('#god', () => {
    it('should return a god', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Ancient.god()).to.be.oneOf(data['gods']);
      });
    });
  });

  describe('#primordial', () => {
    it('should return a primordial', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Ancient.primordial()).to.be.oneOf(data['primordials']);
      });
    });
  });

  describe('#titan', () => {
    it('should return a titan', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Ancient.titan()).to.be.oneOf(data['titans']);
      });
    });
  });

  describe('#hero', () => {
    it('should return a hero', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Ancient.hero()).to.be.oneOf(data['heroes']);
      });
    });
  });
});
