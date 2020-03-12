'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/company.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Company', () => {
  describe('#name', () => {
    it('should return a name', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.Company.name()).to.eql('name');
    }));

    it('should run the name through the fake faker', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('{Name.lastName} {suffix}');
      this.stub(Faker.Name, 'lastName').returns('Hirthe');
      this.stub(Faker.Company, 'suffix').returns('Inc');
      expect(Faker.Company.name()).to.eql('Hirthe Inc');
    }));
  });

  describe('#suffix', () => {
    it('should return a suffix', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['suffixes']).returns('suffix');
      expect(Faker.Company.suffix()).to.eql('suffix');
    }));
  });

  describe('#catchPhrase', () => {
    it('should return a catchPhrase', test(function(this: typeof sinon) {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['buzzwords'][0]).returns('b1');
      randomStub.withArgs(data['buzzwords'][1]).returns('b2');
      randomStub.withArgs(data['buzzwords'][2]).returns('b3');
      expect(Faker.Company.catchPhrase()).to.eql('b1 b2 b3');
    }));
  });

  describe('#buzzword', () => {
    it('should return a buzzword', test(function(this: typeof sinon) {
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
    it('should return a bs', test(function(this: typeof sinon) {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['bs'][0]).returns('bs1');
      randomStub.withArgs(data['bs'][1]).returns('bs2');
      randomStub.withArgs(data['bs'][2]).returns('bs3');
      expect(Faker.Company.bs()).to.eql('bs1 bs2 bs3');
    }));
  });

  describe('#ein', () => {
    it('should return an EIN', test(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').withArgs(0, 9).returns(1);
      expect(Faker.Company.ein()).to.eql('11-1111111');
    }));
  });

  describe('#dunsNumber', () => {
    it('should return a DUNS Number', test(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').withArgs(0, 9).returns(1);
      expect(Faker.Company.dunsNumber()).to.eql('11-111-1111');
    }));
  });

  describe('#logo', () => {
    it('should return URL to a logo', test(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').withArgs(1, 14).returns(11);
      expect(Faker.Company.logo()).to.eql('https://pigment.github.io/fake-logos/logos/medium/color/11.png');
    }));
  });

  describe('#swedishOrganisationNumber', () => {
    it('should return a Swedish Organisation Number', test(function(this: typeof sinon) {
      const betweenStub = this.stub(Faker.Number, 'between');
      betweenStub.withArgs(1, 9).returns(1);
      betweenStub.withArgs(0, 9).returns(2);
      betweenStub.withArgs(2, 9).returns(3);
      this.stub(Faker.Number, 'number').withArgs(6).returns(888888);
      expect(Faker.Company.swedishOrganisationNumber()).to.eql('12388888810');
    }));

    it('should handle sums of modulo 10', test(function(this: typeof sinon) {
      const betweenStub = this.stub(Faker.Number, 'between');
      betweenStub.withArgs(1, 9).returns(1);
      betweenStub.withArgs(0, 9).returns(0);
      betweenStub.withArgs(2, 9).returns(5);
      this.stub(Faker.Number, 'number').withArgs(6).returns(22223);
      expect(Faker.Company.swedishOrganisationNumber()).to.eql('105222230');
    }));
  });

  describe('#norwegianOrganisationNumber', () => {
    it('should return a Norwegian Organisation Number', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs([8, 9]).returns(9);
      this.stub(Faker.Number, 'between').withArgs(0, 10000000).returns(24);
      expect(Faker.Company.norwegianOrganisationNumber()).to.eql('900000247');
    }));
  });

  describe('#australianBusinessNumber', () => {
    it('should return a Australian Business Number', test(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').withArgs(0, 1000000000).returns(182);
      expect(Faker.Company.australianBusinessNumber()).to.eql('88000000182');
    }));
  });

  describe('#profession', () => {
    it('should return a profession', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['professions']).returns('profession');
      expect(Faker.Company.profession()).to.eql('profession');
    }));
  });
});
