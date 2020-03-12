'use strict';
import { expect } from 'chai';
import Faker from '../../src/index';

describe('Bitcoin', () => {
  describe('#address', () => {
    it('should return a hash', () => {
      Array(100).fill(null).forEach(_ => {
        expect(Faker.Bitcoin.address()).to.match(/[0-9a-zA-Z]+/);
      });
    });
  });

  describe('#testnetAddress', () => {
    it('should return a hash', () => {
      Array(100).fill(null).forEach(_ => {
        expect(Faker.Bitcoin.testnetAddress()).to.match(/[0-9a-zA-Z]+/);
      });
    });
  });
});
