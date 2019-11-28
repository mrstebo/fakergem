'use strict';
import { expect } from 'chai';
import { between, betweenFloat, resolveNumber } from '../../src/utils/number-helpers';

describe('Number Helpers', () => {
  describe('#between', () => {
    it('should return a number between min and max', () => {
      Array(100).fill(null).forEach(_ => {
        expect(between(10, 20)).to.be.within(10, 20);
      });
    });
  });

  describe('#randomFloat', () => {
    it('should return a number between min and max', () => {
      Array(100).fill(null).forEach(_ => {
        expect(betweenFloat(0, 2)).to.be.within(0, 2);
      });
    });
  });

  describe('#resolveNumber', () => {
    it('should return the number that is passed in', () => {
      expect(resolveNumber(5)).to.equal(5);
    })

    it('should return a number from a string', () => {
      expect(resolveNumber('5')).to.equal(5);
    });
  });
});
