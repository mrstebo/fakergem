'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/index');
const data = require('../../data/chuck-norris.json');

describe('ChuckNorris', () => {
  describe('#fact', () => {
    it('should return a fact', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['facts']).returns('fact');
      expect(Faker.ChuckNorris.fact()).to.eql('fact');
    }));
  });
});
