'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');
const data = require('../../data/company.json');

describe('Company', () => {
  describe('#name', () => {
    it('should return a name', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.Company.name()).to.eql('name');
    }));
  });

  describe('#suffix', () => {
    it('should return a suffix', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['suffixes']).returns('suffix');
      expect(Faker.Company.suffix()).to.eql('suffix');
    }));
  });

  describe('#catchPhrase', () => {
    it('should return a catchPhrase', sinonTest(function() {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['buzzwords'][0]).returns('b1');
      randomStub.withArgs(data['buzzwords'][1]).returns('b2');
      randomStub.withArgs(data['buzzwords'][2]).returns('b3');
      expect(Faker.Company.catchPhrase()).to.eql('b1 b2 b3');
    }));
  });

  describe('#buzzword', () => {
    it('should return a buzzword', sinonTest(function() {
      const buzzwords = [
        ...data['buzzwords'][0],
        ...data['buzzwords'][1],
        ...data['buzzwords'][2]
      ];
      this.stub(Faker.Random, 'element').withArgs(buzzwords).returns('buzzword');
      expect(Faker.Company.buzzword()).to.eql('buzzword');
    }));
  });

  describe('#bs', () => {
    it('should return a bs', sinonTest(function() {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['bs'][0]).returns('bs1');
      randomStub.withArgs(data['bs'][1]).returns('bs2');
      randomStub.withArgs(data['bs'][2]).returns('bs3');
      expect(Faker.Company.bs()).to.eql('bs1 bs2 bs3');
    }));
  });

  describe('#ein', () => {
    it('should return an EIN', sinonTest(function() {
      this.stub(Faker.Number, 'between').withArgs(0, 9).returns(1);
      expect(Faker.Company.ein()).to.eql('11-1111111');
    }));
  });

  describe('#dunsNumber', () => {
    it('should return a DUNS Number', sinonTest(function() {
      this.stub(Faker.Number, 'between').withArgs(0, 9).returns(1);
      expect(Faker.Company.dunsNumber()).to.eql('11-111-1111');
    }));
  });

  describe('#logo', () => {
    it('should return URL to a logo', sinonTest(function() {
      this.stub(Faker.Number, 'between').withArgs(1, 14).returns(11);
      expect(Faker.Company.logo()).to.eql('https://pigment.github.io/fake-logos/logos/medium/color/11.png');
    }));
  });

  describe('#swedishOrganisationNumber', () => {
    it('should return a Swedish Organisation Number', sinonTest(function() {
      const betweenStub = this.stub(Faker.Number, 'between');
      betweenStub.withArgs(1, 9).returns(1);
      betweenStub.withArgs(0, 9).returns(2);
      betweenStub.withArgs(2, 9).returns(3);
      this.stub(Faker.Number, 'number').withArgs(6).returns('888888');
      expect(Faker.Company.swedishOrganisationNumber()).to.eql('12388888810');
    }));

    it('should handle sums of modulo 10', sinonTest(function() {
      const betweenStub = this.stub(Faker.Number, 'between');
      betweenStub.withArgs(1, 9).returns(1);
      betweenStub.withArgs(0, 9).returns(0);
      betweenStub.withArgs(2, 9).returns(5);
      this.stub(Faker.Number, 'number').withArgs(6).returns('22223');
      expect(Faker.Company.swedishOrganisationNumber()).to.eql('12388888810');
    }));
  });

  describe('#norwegianOrganisationNumber', () => {
    it('should return a Norwegian Organisation Number', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs([8, 9]).returns(9);
      this.stub(Faker.Number, 'between').withArgs(0, 10000000).returns(24);
      expect(Faker.Company.norwegianOrganisationNumber()).to.eql('900000247');
    }));
  });

  describe('#australianBusinessNumber', () => {
    it('should return a Australian Business Number', sinonTest(function() {
      this.stub(Faker.Number, 'between').withArgs(0, 1000000000).returns(182);
      expect(Faker.Company.australianBusinessNumber()).to.eql('98000000182');
    }));
  });

  describe('#profession', () => {
    it('should return a profession', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['professions']).returns('profession');
      expect(Faker.Company.profession()).to.eql('profession');
    }));
  });
});
