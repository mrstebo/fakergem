'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/harry-potter.json';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});

describe('HarryPotter', () => {
  describe('#character', () => {
    it('should return a character', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['characters']).returns('character');
      expect(Faker.HarryPotter.character()).to.eql('character');
    }));
  });

  describe('#location', () => {
    it('should return a location', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['locations']).returns('location');
      expect(Faker.HarryPotter.location()).to.eql('location');
    }));
  });

  describe('#quote', () => {
    it('should return a quote', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['quotes']).returns('quote');
      expect(Faker.HarryPotter.quote()).to.eql('quote');
    }));
  });

  describe('#book', () => {
    it('should return a book', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['books']).returns('book');
      expect(Faker.HarryPotter.book()).to.eql('book');
    }));
  });
});
