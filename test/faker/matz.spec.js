'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');
const data = require('../../data/matz.json');

describe('Matz', () => {
  describe('#quote', () => {
    it('should return a quote', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['quotes']).returns('quote');
      expect(Faker.Matz.quote()).to.eql('quote');
    }));
  });
});
