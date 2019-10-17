'use strict';
import { expect } from 'chai';
const Faker = require('../../src/faker');

describe('Boolean', () => {
  describe('#boolean', () => {
    it('should return a boolean', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Boolean.boolean()).to.be.a('boolean');
      });
    });

    it('should return true or false', () => {
      [...Array(100).keys()].map(_ => {
        expect(Faker.Boolean.boolean()).to.be.oneOf([true, false]);
      });
    });

    it('should always return false when trueBias is 0', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Boolean.boolean(0)).to.be.false;
      });
    });

    it('should always return true when trueBias is 1', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Boolean.boolean(1)).to.be.true;
      });
    });
  });
});
