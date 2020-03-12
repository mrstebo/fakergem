'use strict';
import { expect } from 'chai';
import { pickOne, shuffle } from '../../src/utils/collection-helpers';

describe('Collection Helpers', () => {
  describe('#pickOne', () => {
    it('should return an item from a collection', () => {
      const collection = [1, 2, 3, 4, 5];
      Array(100).fill(null).forEach(_ => {
        expect(pickOne(collection)).to.be.oneOf(collection);
      });
    });
  });

  describe('#shuffle', () => {
    it('should shuffle an array', () => {
      const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const result = shuffle(collection);
      expect(collection).not.to.eql(result);
    });

    it('should not modify the passed in collection', () => {
      const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      shuffle(collection);
      expect(collection).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });
});
