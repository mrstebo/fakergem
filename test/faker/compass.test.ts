'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../data/compass.json';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});

describe('Compass', () => {
  describe('#direction', () => {
    it('should return a direction', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['directions']).returns('direction');
      expect(Faker.Compass.direction()).to.eql('direction');
    }));

    it('should replace placeholders', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['directions']).returns('{cardinal} {ordinal} {halfWind} {quarterWind}');
      this.stub(Faker.Compass, 'cardinal').returns('c');
      this.stub(Faker.Compass, 'ordinal').returns('o');
      this.stub(Faker.Compass, 'halfWind').returns('h');
      this.stub(Faker.Compass, 'quarterWind').returns('q');
      expect(Faker.Compass.direction()).to.eql('c o h q');
    }));
  });

  describe('#cardinal', () => {
    it('should return a cardinal', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['cardinals']['word']).returns('cardinal');
      expect(Faker.Compass.cardinal()).to.eql('cardinal');
    }));
  });

  describe('#ordinal', () => {
    it('should return a ordinal', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['ordinals']['word']).returns('ordinal');
      expect(Faker.Compass.ordinal()).to.eql('ordinal');
    }));
  });

  describe('#halfWind', () => {
    it('should return a halfWind', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['halfWinds']['word']).returns('half wind');
      expect(Faker.Compass.halfWind()).to.eql('half wind');
    }));
  });

  describe('#quarterWind', () => {
    it('should return a quarterWind', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['quarterWinds']['word']).returns('quarter wind');
      expect(Faker.Compass.quarterWind()).to.eql('quarter wind');
    }));
  });

  describe('#abbreviation', () => {
    it('should return a abbreviation', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['abbreviations']).returns('abbreviation');
      expect(Faker.Compass.abbreviation()).to.eql('abbreviation');
    }));

    it('should replace placeholders', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['abbreviations']).returns('{cardinalAbbreviation} {ordinalAbbreviation} {halfWindAbbreviation} {quarterWindAbbreviation}');
      this.stub(Faker.Compass, 'cardinalAbbreviation').returns('ca');
      this.stub(Faker.Compass, 'ordinalAbbreviation').returns('oa');
      this.stub(Faker.Compass, 'halfWindAbbreviation').returns('ha');
      this.stub(Faker.Compass, 'quarterWindAbbreviation').returns('qa');
      expect(Faker.Compass.abbreviation()).to.eql('ca oa ha qa');
    }));
  });

  describe('#cardinalAbbreviation', () => {
    it('should return a cardinalAbbreviation', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['cardinals']['abbreviation']).returns('cardinal abbreviation');
      expect(Faker.Compass.cardinalAbbreviation()).to.eql('cardinal abbreviation');
    }));
  });

  describe('#ordinalAbbreviation', () => {
    it('should return a ordinalAbbreviation', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['ordinals']['abbreviation']).returns('ordinal abbreviation');
      expect(Faker.Compass.ordinalAbbreviation()).to.eql('ordinal abbreviation');
    }));
  });

  describe('#halfWindAbbreviation', () => {
    it('should return a halfWindAbbreviation', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['halfWinds']['abbreviation']).returns('half wind abbreviation');
      expect(Faker.Compass.halfWindAbbreviation()).to.eql('half wind abbreviation');
    }));
  });

  describe('#quarterWindAbbreviation', () => {
    it('should return a quarterWindAbbreviation', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['quarterWinds']['abbreviation']).returns('quarter wind abbreviation');
      expect(Faker.Compass.quarterWindAbbreviation()).to.eql('quarter wind abbreviation');
    }));
  });

  describe('#azimuth', () => {
    it('should return a azimuth', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['azimuths']).returns('azimuth');
      expect(Faker.Compass.azimuth()).to.eql('azimuth');
    }));

    it('should replace placeholders', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['azimuths']).returns('{cardinalAzimuth} {ordinalAzimuth} {halfWindAzimuth} {quarterWindAzimuth}');
      this.stub(Faker.Compass, 'cardinalAzimuth').returns('ca');
      this.stub(Faker.Compass, 'ordinalAzimuth').returns('oa');
      this.stub(Faker.Compass, 'halfWindAzimuth').returns('ha');
      this.stub(Faker.Compass, 'quarterWindAzimuth').returns('qa');
      expect(Faker.Compass.azimuth()).to.eql('ca oa ha qa');
    }));
  });

  describe('#cardinalAzimuth', () => {
    it('should return a cardinalAzimuth', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['cardinals']['azimuth']).returns('cardinal azimuth');
      expect(Faker.Compass.cardinalAzimuth()).to.eql('cardinal azimuth');
    }));
  });

  describe('#ordinalAzimuth', () => {
    it('should return a ordinalAzimuth', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['ordinals']['azimuth']).returns('ordinal azimuth');
      expect(Faker.Compass.ordinalAzimuth()).to.eql('ordinal azimuth');
    }));
  });

  describe('#halfWindAzimuth', () => {
    it('should return a halfWindAzimuth', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['halfWinds']['azimuth']).returns('half wind azimuth');
      expect(Faker.Compass.halfWindAzimuth()).to.eql('half wind azimuth');
    }));
  });

  describe('#quarterWindAzimuth', () => {
    it('should return a quarterWindAzimuth', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['quarterWinds']['azimuth']).returns('quarter wind azimuth');
      expect(Faker.Compass.quarterWindAzimuth()).to.eql('quarter wind azimuth');
    }));
  });
});
