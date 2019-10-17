'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});

describe('Crypto', () => {
  describe('#md5', () => {
    it('should return a md5', sinonTest(function(this: typeof sinon) {
      const characters = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
      this.stub(Faker.Random, 'assortment').withArgs(characters, 255).returns(['1', '2', '3']);
      expect(Faker.Crypto.md5()).to.eql('202cb962ac59075b964b07152d234b70');
    }));
  });

  describe('#sha1', () => {
    it('should return a sha1', sinonTest(function(this: typeof sinon) {
      const characters = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
      this.stub(Faker.Random, 'assortment').withArgs(characters, 255).returns(['1', '2', '3']);
      expect(Faker.Crypto.sha1()).to.eql('40bd001563085fc35165329ea1ff5c5ecbdbbeef');
    }));
  });

  describe('#sha256', () => {
    it('should return a sha256', sinonTest(function(this: typeof sinon) {
      const characters = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
      this.stub(Faker.Random, 'assortment').withArgs(characters, 255).returns(['1', '2', '3']);
      expect(Faker.Crypto.sha256()).to.eql('a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3');
    }));
  });
});
