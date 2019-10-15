'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/index');

describe('Random', () => {
  describe('#assortment', () => {
    it('should return a shuffled array', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const result = Faker.Random.assortment(array, 10);
      array.forEach(i => expect(result).to.include(i));
      expect(result).to.not.eql(array);
    });

    it('should return a fixed amount of elements', () => {
      const array = [1, 2, 3, 4, 5];
      expect(Faker.Random.assortment(array, 2)).to.have.lengthOf(2);
    });

    it('should repeat elements if number of elements is less than amount required', () => {
      const array = [1, 2, 3];
      const result = Faker.Random.assortment(array, 6);
      expect(result.sort()).to.eql([1, 1, 2, 2, 3, 3]);
    });

    it('should return correct number of elements', () => {
      const array = ['a', 'b'];
      expect(Faker.Random.assortment(array, 2)).to.have.lengthOf(2);
    });
  });

  describe('#element', () => {
    it('should return an element from an array', () => {
      const array = [1, 2, 3, 4, 5];
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Random.element(array)).to.be.oneOf(array);
      });
    });

    it('should throw if array not specified', () => {
      expect(() => Faker.Random.element()).to.throw('An array or string must be specified');
    });

    it('should return character if string present', () => {
      expect(Faker.Random.element('abc')).to.be.oneOf(['a', 'b', 'c']);
    });
  });
});
