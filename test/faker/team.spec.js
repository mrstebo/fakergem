'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');
const data = require('../../data/team.json');

describe('Team', () => {
  describe('#creature', () => {
    it('should return a creature', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['creatures']).returns('creature');
      expect(Faker.Team.creature()).to.eql('creature');
    }));
  });

  describe('#name', () => {
    it('should return a name', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.Team.name()).to.eql('name');
    }));
  });

  describe('#state', () => {
    it('should return a state', sinonTest(function() {
      this.stub(Faker.Address, 'state').returns('state');
      expect(Faker.Team.state()).to.eql('state');
    }));
  });

  describe('#sport', () => {
    it('should return a sport', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['sports']).returns('sport');
      expect(Faker.Team.sport()).to.eql('sport');
    }));
  });
});
