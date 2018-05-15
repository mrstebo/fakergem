'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');
const data = require('../../data/cat.json');

describe('Cat', () => {
  describe('#name', () => {
    it('should return a name', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.Cat.name()).to.eql('name');
    }));
  });

  describe('#breed', () => {
    it('should return a breed', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['breeds']).returns('breed');
      expect(Faker.Cat.breed()).to.eql('breed');
    }));
  });

  describe('#registry', () => {
    it('should return a registry', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['registries']).returns('registry');
      expect(Faker.Cat.registry()).to.eql('registry');
    }));
  });
});
