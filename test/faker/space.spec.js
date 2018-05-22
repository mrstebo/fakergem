'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');
const data = require('../../data/space.json');

describe('Space', () => {
  describe('#planet', () => {
    it('should return a planet', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['planets']).returns('planet');
      expect(Faker.Space.planet()).to.eql('planet');
    }));
  });

  describe('#moon', () => {
    it('should return a moon', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['moons']).returns('moon');
      expect(Faker.Space.moon()).to.eql('moon');
    }));
  });

  describe('#galaxy', () => {
    it('should return a galaxy', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['galaxies']).returns('galaxy');
      expect(Faker.Space.galaxy()).to.eql('galaxy');
    }));
  });

  describe('#nebula', () => {
    it('should return a nebula', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['nebulas']).returns('nebula');
      expect(Faker.Space.nebula()).to.eql('nebula');
    }));
  });

  describe('#starCluster', () => {
    it('should return a star cluster', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['starClusters']).returns('star cluster');
      expect(Faker.Space.starCluster()).to.eql('star cluster');
    }));
  });

  describe('#constellation', () => {
    it('should return a constellation', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['constellations']).returns('constellation');
      expect(Faker.Space.constellation()).to.eql('constellation');
    }));
  });

  describe('#star', () => {
    it('should return a star', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['stars']).returns('star');
      expect(Faker.Space.star()).to.eql('star');
    }));
  });

  describe('#agency', () => {
    it('should return a agency', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['agencies']).returns('agency');
      expect(Faker.Space.agency()).to.eql('agency');
    }));
  });

  describe('#agencyAbv', () => {
    it('should return an agency abbreviation', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['agencyAbvs']).returns('agency abbreviation');
      expect(Faker.Space.agencyAbv()).to.eql('agency abbreviation');
    }));
  });

  describe('#nasaSpaceCraft', () => {
    it('should return a NASA space craft', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['nasaSpaceCrafts']).returns('NASA space craft');
      expect(Faker.Space.nasaSpaceCraft()).to.eql('NASA space craft');
    }));
  });

  describe('#company', () => {
    it('should return a company', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['companies']).returns('company');
      expect(Faker.Space.company()).to.eql('company');
    }));
  });

  describe('#distanceMeasurement', () => {
    it('should return a distanceMeasurement', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['distanceMeasurements']).returns('distance measurement');
      expect(Faker.Space.distanceMeasurement()).to.eql('distance measurement');
    }));
  });

  describe('#meteorite', () => {
    it('should return a meteorite', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['meteorites']).returns('meteorite');
      expect(Faker.Space.meteorite()).to.eql('meteorite');
    }));
  });
});
