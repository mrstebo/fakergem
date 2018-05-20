'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');
const data = require('../../data/university.json');

describe('University', () => {
  describe('#name', () => {
    it('should return a name', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.University.name()).to.eql('name');
    }));
  });
});
