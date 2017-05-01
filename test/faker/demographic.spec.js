'use strict';
const expect = require('chai').expect;
const Demographic = require('../../src/faker/demographic');
const data = require('../../data/demographic.json');

describe('Demographic', () => {
  describe('#race', () => {
    it('should return a race', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Demographic.race()).to.be.oneOf(data['races']);
      });
    });
  });

  describe('#educationalAttainment', () => {
    it('should return a educationalAttainment', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Demographic.educationalAttainment()).to.be.oneOf(data['educationalAttainments']);
      });
    });
  });

  describe('#demonym', () => {
    it('should return a demonym', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Demographic.demonym()).to.be.oneOf(data['demonyms']);
      });
    });
  });

  describe('#maritalStatus', () => {
    it('should return a maritalStatus', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Demographic.maritalStatus()).to.be.oneOf(data['maritalStatuses']);
      });
    });
  });

  describe('#sex', () => {
    it('should return a sex', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Demographic.sex()).to.be.oneOf(data['sexes']);
      });
    });
  });

  describe('#height', () => {
    it('should return a string', () => {
      expect(Demographic.height()).to.be.a('string');
    });

    it('should return a height', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Demographic.height()).to.match(/^\d+\.\d{2}$/);
      });
    });

    it('should return a height in the specified unit', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Demographic.height('imperial')).to.match(/^\d+\sft,\s\d+\sin$/);
      });
    });
  });
});
