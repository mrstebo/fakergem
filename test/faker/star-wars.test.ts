'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../data/star-wars.json';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});

describe('StarWars', () => {
  describe('#character', () => {
    it('should return a character', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['characters']).returns('character');
      expect(Faker.StarWars.character()).to.eql('character');
    }));
  });

  describe('#droid', () => {
    it('should return a droid', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['droids']).returns('droid');
      expect(Faker.StarWars.droid()).to.eql('droid');
    }));
  });

  describe('#planet', () => {
    it('should return a planet', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['planets']).returns('planet');
      expect(Faker.StarWars.planet()).to.eql('planet');
    }));
  });

  describe('#quote', () => {
    it('should return a quote', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['quotes']).returns('quote');
      expect(Faker.StarWars.quote()).to.eql('quote');
    }));
  });

  describe('#specie', () => {
    it('should return a specie', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['species']).returns('specie');
      expect(Faker.StarWars.specie()).to.eql('specie');
    }));
  });

  describe('#vehicle', () => {
    it('should return a vehicle', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['vehicles']).returns('vehicle');
      expect(Faker.StarWars.vehicle()).to.eql('vehicle');
    }));
  });

  describe('#wookieSentence', () => {
    it('should return wookie words', sinonTest(function(this: typeof sinon) {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['wookieWords']).returns('word');
      randomStub.withArgs(['.', '?', '!']).returns('*');
      this.stub(Faker.Number, 'between').withArgs(1, 10).returns(3);
      expect(Faker.StarWars.wookieSentence()).to.eql('Word word word*');
    }));

    it('should start with a capital letter', () => {
      expect(Faker.StarWars.wookieSentence()).to.match(/^[A-Z]/);
    });

    it('should end with period, question mark or explanation mark', () => {
      expect(Faker.StarWars.wookieSentence()).to.match(/[.?!]$/);
    });
  });
});
