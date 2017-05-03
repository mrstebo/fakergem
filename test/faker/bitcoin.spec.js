'use strict';
const expect = require('chai').expect;
const Bitcoin = require('../../src/faker/bitcoin');

describe('Bitcoin', () => {
  describe('#address', () => {
    it('should return a hash', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Bitcoin.address()).to.match(/[0-9a-zA-Z]+/);
      });
    });
  });

  describe('#testnetAddress', () => {
    it('should return a hash', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Bitcoin.testnetAddress()).to.match(/[0-9a-zA-Z]+/);
      });
    });
  });
});
