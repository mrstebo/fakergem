'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/index');
const data = require('../../data/harry-potter.json');

describe('HarryPotter', () => {
  describe('#character', () => {
    it('should return a character', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['characters']).returns('character');
      expect(Faker.HarryPotter.character()).to.eql('character');
    }));
  });

  describe('#location', () => {
    it('should return a location', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['locations']).returns('location');
      expect(Faker.HarryPotter.location()).to.eql('location');
    }));
  });

  describe('#quote', () => {
    it('should return a quote', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['quotes']).returns('quote');
      expect(Faker.HarryPotter.quote()).to.eql('quote');
    }));
  });

  describe('#book', () => {
    it('should return a book', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['books']).returns('book');
      expect(Faker.HarryPotter.book()).to.eql('book');
    }));
  });
});
