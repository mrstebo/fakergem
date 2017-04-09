'use strict';
const expect = require('chai').expect;
const Random = require('../../src/utils/random');

describe('Random', () => {
  describe('#number', () => {
    it('should return a number between min and max', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Random.number(10, 20)).to.be.within(10, 20);
      });
    });
  });

  describe('#itemFromCollection', () => {
    it('should return an item from a collection', () => {
      const collection = [1, 2, 3, 4, 5];
      [...Array(100).keys()].forEach(_ => {
        expect(Random.itemFromCollection(collection)).to.be.oneOf(collection);
      });
    });
  });
});
