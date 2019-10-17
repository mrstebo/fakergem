'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});
const data = require('../../data/music.json');

describe('Music', () => {
  describe('#key', () => {
    it('should return a key', sinonTest(function(this: typeof sinon) {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['keys']).returns('X');
      randomStub.withArgs(data['keyVariants']).returns('x');
      expect(Faker.Music.key()).to.eql('Xx');
    }));
  });

  describe('#chord', () => {
    it('should return a chord', sinonTest(function(this: typeof sinon) {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['keys']).returns('X');
      randomStub.withArgs(data['chordTypes']).returns('vm7');
      expect(Faker.Music.chord()).to.eql('Xvm7');
    }));
  });

  describe('#instrument', () => {
    it('should return a instrument', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['instruments']).returns('instrument');
      expect(Faker.Music.instrument()).to.eql('instrument');
    }));
  });
});
