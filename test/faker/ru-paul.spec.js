'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/index');
const data = require('../../data/ru-paul.json');

describe('RuPaul', () => {
  describe('#quote', () => {
    it('should return a quote', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['quotes']).returns('quote');
      expect(Faker.RuPaul.quote()).to.eql('quote');
    }));
  });
});
