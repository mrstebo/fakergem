'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/name.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Name', () => {
  describe('#name', () => {
    it('should return a first and last name', test(function(this: typeof sinon) {
      this.stub(Faker.Name, 'firstName').returns('fn');
      this.stub(Faker.Name, 'lastName').returns('ln');
      expect(Faker.Name.name()).to.eql('fn ln');
    }));
  });

  describe('#nameWithMiddle', () => {
    it('should return two first names and a last name', test(function(this: typeof sinon) {
      this.stub(Faker.Name, 'firstName').returns('fn');
      this.stub(Faker.Name, 'lastName').returns('ln');
      expect(Faker.Name.nameWithMiddle()).to.eql('fn fn ln');
    }));
  });

  describe('#firstName', () => {
    it('should return a first name', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['firstNames']).returns('first name');
      expect(Faker.Name.firstName()).to.eql('first name');
    }));
  });

  describe('#lastName', () => {
    it('should return a last name', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['lastNames']).returns('last name');
      expect(Faker.Name.lastName()).to.eql('last name');
    }));
  });

  describe('#prefix', () => {
    it('should return a prefix', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['prefixes']).returns('prefix');
      expect(Faker.Name.prefix()).to.eql('prefix');
    }));
  });

  describe('#suffix', () => {
    it('should return a suffix', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['suffixes']).returns('suffix');
      expect(Faker.Name.suffix()).to.eql('suffix');
    }));
  });

  describe('#title', () => {
    it('should return a title descriptor, level and job', test(function(this: typeof sinon) {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['titles']['descriptor']).returns('Elite');
      randomStub.withArgs(data['titles']['level']).returns('Warrior');
      randomStub.withArgs(data['titles']['job']).returns('Mage');
      expect(Faker.Name.title()).to.eql('Elite Warrior Mage');
    }));
  });
});
