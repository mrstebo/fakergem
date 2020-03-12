'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/music.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Music', () => {
  describe('#key', () => {
    it('should return a key', test(function(this: typeof sinon) {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['keys']).returns('X');
      randomStub.withArgs(data['keyVariants']).returns('x');
      expect(Faker.Music.key()).to.eql('Xx');
    }));
  });

  describe('#chord', () => {
    it('should return a chord', test(function(this: typeof sinon) {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['keys']).returns('X');
      randomStub.withArgs(data['chordTypes']).returns('vm7');
      expect(Faker.Music.chord()).to.eql('Xvm7');
    }));
  });

  describe('#instrument', () => {
    it('should return a instrument', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['instruments']).returns('instrument');
      expect(Faker.Music.instrument()).to.eql('instrument');
    }));
  });
});
