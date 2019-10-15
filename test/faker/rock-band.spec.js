'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/index');
const data = require('../../data/rock-band.json');

describe('RockBand', () => {
  describe('#name', () => {
    it('should return the name of a rock band', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.RockBand.name()).to.eql('name');
    }));
  });
});
