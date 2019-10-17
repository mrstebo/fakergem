'use strict';
import { expect } from 'chai';
const Faker = require('../../src/faker');

describe('Bitcoin', () => {
  describe('#address', () => {
    it('should return a hash', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Bitcoin.address()).to.match(/[0-9a-zA-Z]+/);
      });
    });
  });

  describe('#testnetAddress', () => {
    it('should return a hash', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Bitcoin.testnetAddress()).to.match(/[0-9a-zA-Z]+/);
      });
    });
  });
});
