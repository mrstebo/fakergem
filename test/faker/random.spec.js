'use strict';
const expect = require('chai').expect;
const Random = require('../../src/faker/random');

describe('Random', () => {
  describe('#element', () => {
    it('should return an element from an array', () => {
      const array = [1, 2, 3, 4, 5];
      [...Array(100).keys()].forEach(() => {
        expect(Random.element(array)).to.be.oneOf(array);
      });
    });

    it('should throw if array not specified', () => {
      expect(() => Random.element()).to.throw('An array or string must be specified');
    });

    it('should return character if string present', () => {
      expect(Random.element('abc')).to.be.oneOf(['a', 'b', 'c']);
    })
  });
});
