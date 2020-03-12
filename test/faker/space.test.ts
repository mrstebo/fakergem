'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/space.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Space', () => {
  describe('#planet', () => {
    it('should return a planet', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['planets']).returns('planet');
      expect(Faker.Space.planet()).to.eql('planet');
    }));
  });

  describe('#moon', () => {
    it('should return a moon', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['moons']).returns('moon');
      expect(Faker.Space.moon()).to.eql('moon');
    }));
  });

  describe('#galaxy', () => {
    it('should return a galaxy', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['galaxies']).returns('galaxy');
      expect(Faker.Space.galaxy()).to.eql('galaxy');
    }));
  });

  describe('#nebula', () => {
    it('should return a nebula', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['nebulas']).returns('nebula');
      expect(Faker.Space.nebula()).to.eql('nebula');
    }));
  });

  describe('#starCluster', () => {
    it('should return a star cluster', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['starClusters']).returns('star cluster');
      expect(Faker.Space.starCluster()).to.eql('star cluster');
    }));
  });

  describe('#constellation', () => {
    it('should return a constellation', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['constellations']).returns('constellation');
      expect(Faker.Space.constellation()).to.eql('constellation');
    }));
  });

  describe('#star', () => {
    it('should return a star', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['stars']).returns('star');
      expect(Faker.Space.star()).to.eql('star');
    }));
  });

  describe('#agency', () => {
    it('should return a agency', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['agencies']).returns('agency');
      expect(Faker.Space.agency()).to.eql('agency');
    }));
  });

  describe('#agencyAbv', () => {
    it('should return an agency abbreviation', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['agencyAbvs']).returns('agency abbreviation');
      expect(Faker.Space.agencyAbv()).to.eql('agency abbreviation');
    }));
  });

  describe('#nasaSpaceCraft', () => {
    it('should return a NASA space craft', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['nasaSpaceCrafts']).returns('NASA space craft');
      expect(Faker.Space.nasaSpaceCraft()).to.eql('NASA space craft');
    }));
  });

  describe('#company', () => {
    it('should return a company', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['companies']).returns('company');
      expect(Faker.Space.company()).to.eql('company');
    }));
  });

  describe('#distanceMeasurement', () => {
    it('should return a distanceMeasurement', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['distanceMeasurements']).returns('distance measurement');
      expect(Faker.Space.distanceMeasurement()).to.eql('distance measurement');
    }));
  });

  describe('#meteorite', () => {
    it('should return a meteorite', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['meteorites']).returns('meteorite');
      expect(Faker.Space.meteorite()).to.eql('meteorite');
    }));
  });
});
