'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../data/cat.json';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});

describe('Cat', () => {
  describe('#name', () => {
    it('should return a name', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.Cat.name()).to.eql('name');
    }));
  });

  describe('#breed', () => {
    it('should return a breed', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['breeds']).returns('breed');
      expect(Faker.Cat.breed()).to.eql('breed');
    }));
  });

  describe('#registry', () => {
    it('should return a registry', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['registries']).returns('registry');
      expect(Faker.Cat.registry()).to.eql('registry');
    }));
  });
});
