'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/demographic.json';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});

describe('Demographic', () => {
  describe('#race', () => {
    it('should return a race', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['races']).returns('race');
      expect(Faker.Demographic.race()).to.eql('race');
    }));
  });

  describe('#educationalAttainment', () => {
    it('should return a educationalAttainment', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['educationalAttainments']).returns('education');
      expect(Faker.Demographic.educationalAttainment()).to.eql('education');
    }));
  });

  describe('#demonym', () => {
    it('should return a demonym', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['demonyms']).returns('demonym');
      expect(Faker.Demographic.demonym()).to.eql('demonym');
    }));
  });

  describe('#maritalStatus', () => {
    it('should return a maritalStatus', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['maritalStatuses']).returns('marital status');
      expect(Faker.Demographic.maritalStatus()).to.eql('marital status');
    }));
  });

  describe('#sex', () => {
    it('should return a sex', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['sexes']).returns('sex');
      expect(Faker.Demographic.sex()).to.eql('sex');
    }));
  });

  describe('#height', () => {
    it('should return a height', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Number, 'betweenF').withArgs(1.45, 2.13).returns(1.57);
      expect(Faker.Demographic.height()).to.eql('1.57');
    }));

    it('should return a height in the specified unit', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').withArgs(57, 86).returns(62);
      expect(Faker.Demographic.height('imperial')).to.eql('5 ft, 2 in');
    }));
  });
});
