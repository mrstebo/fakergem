'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../data/pokemon.json';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});

describe('Pokemon', () => {
  describe('#name', () => {
    it('should return a name', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.Pokemon.name()).to.eql('name');
    }));
  });

  describe('#location', () => {
    it('should return a location', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['locations']).returns('location');
      expect(Faker.Pokemon.location()).to.eql('location');
    }));
  });
});
