'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../data/team.json';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});

describe('Team', () => {
  describe('#creature', () => {
    it('should return a creature', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['creatures']).returns('creature');
      expect(Faker.Team.creature()).to.eql('creature');
    }));
  });

  describe('#name', () => {
    it('should return a name', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.Team.name()).to.eql('name');
    }));
  });

  describe('#state', () => {
    it('should return a state', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Address, 'state').returns('state');
      expect(Faker.Team.state()).to.eql('state');
    }));
  });

  describe('#sport', () => {
    it('should return a sport', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['sports']).returns('sport');
      expect(Faker.Team.sport()).to.eql('sport');
    }));
  });
});
