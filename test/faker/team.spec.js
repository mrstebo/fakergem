'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/team.json');
const addressData = require('../../data/address.json');

describe('Team', () => {
  describe('#creature', () => {
    it('should return a creature', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Team.creature()).to.be.oneOf(data['creatures']);
      });
    });
  });

  describe('#name', () => {
    it('should return a name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Team.name()).to.be.oneOf(data['names']);
      });
    });
  });

  describe('#state', () => {
    it('should return a state', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Team.state()).to.be.oneOf(addressData['states']);
      });
    });
  });

  describe('#sport', () => {
    it('should return a sport', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Team.sport()).to.be.oneOf(data['sports']);
      });
    });
  });
});
