'use strict';
const expect = require('chai').expect;
const Boolean = require('../../src/faker/boolean');

describe('Boolean', () => {
  describe('#boolean', () => {
    it('should return a boolean', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Boolean.boolean()).to.be.a('boolean');
      });
    });

    it('should return true or false', () => {
      [...Array(100).keys()].map(_ => {
        expect(Boolean.boolean()).to.be.oneOf([true, false]);
      });
    });

    it('should always return false when trueBias is 0', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Boolean.boolean(0)).to.be.false;
      });
    });

    it('should always return true when trueBias is 1', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Boolean.boolean(1)).to.be.true;
      });
    });
  });
});
