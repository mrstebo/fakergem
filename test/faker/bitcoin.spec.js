'use strict';
const expect = require('chai').expect;
const Bitcoin = require('../../src/faker/bitcoin');

describe('Bitcoin', () => {
  describe('#address', () => {
    it('should return a string', () => {
      expect(Bitcoin.address()).to.be.a('string');
    });

    it('should return a hash', () => {
      expect(Bitcoin.address()).to.match(/[0-9a-zA-Z]+/);
    });
  });

  describe('#testnetAddress', () => {
    it('should return a string', () => {
      expect(Bitcoin.testnetAddress()).to.be.a('string');
    });

    it('should return a hash', () => {
      expect(Bitcoin.testnetAddress()).to.match(/[0-9a-zA-Z]+/);
    });
  });
});
