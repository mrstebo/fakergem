'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/index');
const data = require('../../data/hacker.json');

describe('Hacker', () => {
  describe('#saySomethingSmart', () => {
    it('should replace placeholders', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Hacker.saySomethingSmart()).not.to.match(/\{\w+\}/);
      });
    });
  });

  describe('#abbreviation', () => {
    it('should return a abbreviation', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Hacker.abbreviation()).to.be.oneOf(data['abbreviations']);
      });
    });
  });

  describe('#adjective', () => {
    it('should return a adjective', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Hacker.adjective()).to.be.oneOf(data['adjectives']);
      });
    });
  });

  describe('#noun', () => {
    it('should return a noun', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Hacker.noun()).to.be.oneOf(data['nouns']);
      });
    });
  });

  describe('#verb', () => {
    it('should return a verb', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Hacker.verb()).to.be.oneOf(data['verbs']);
      });
    });
  });

  describe('#ingverb', () => {
    it('should return a ingverb', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Hacker.ingverb()).to.be.oneOf(data['ingverbs']);
      });
    });
  });
});
