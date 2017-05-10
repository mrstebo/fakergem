'use strict';
const expect = require('chai').expect;
const Crypto = require('../../src/faker/crypto');

describe('Crypto', () => {
  describe('#md5', () => {
    it('should return a md5', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Crypto.md5()).to.match(/^[0-9a-f]+$/);
      });
    });
  });

  describe('#sha1', () => {
    it('should return a sha1', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Crypto.sha1()).to.match(/^[0-9a-f]+$/);
      });
    });
  });

  describe('#sha256', () => {
    it('should return a sha256', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Crypto.sha256()).to.match(/^[0-9a-f]+$/);
      });
    });
  });
});
