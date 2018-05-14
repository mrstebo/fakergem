'use strict';
const expect = require('chai').expect;
const orList = require('../support/regexp').orList;
const Faker = require('../../src/faker');
const data = require('../../data/educator.json');

describe('Educator', () => {
  describe('#university', () => {
    it('should return a string', () => {
      expect(Faker.Educator.university()).to.be.a('string');
    });

    it('should start with a name', () => {
      const re = new RegExp(`^(${orList(data['names'])})`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Educator.university()).to.match(re);
      });
    });

    it('should end with a tertiary type', () => {
      const re = new RegExp(`(${orList(data['tertiaries']['types'])})$`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Educator.university()).to.match(re);
      });
    });
  });

  describe('#secondarySchool', () => {
    it('should return a string', () => {
      expect(Faker.Educator.secondarySchool()).to.be.a('string');
    });

    it('should start with a name', () => {
      const re = new RegExp(`^(${orList(data['names'])})`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Educator.secondarySchool()).to.match(re);
      });
    });

    it('should end with a secondary', () => {
      const re = new RegExp(`(${orList(data['secondaries'])})$`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Educator.secondarySchool()).to.match(re);
      });
    });
  });

  describe('#course', () => {
    it('should return a string', () => {
      expect(Faker.Educator.course()).to.be.a('string');
    });

    it('should start with a course type', () => {
      const re = new RegExp(`^(${orList(data['tertiaries']['course']['types'])})`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Educator.course()).to.match(re);
      });
    });

    it('should end with a course subject', () => {
      const re = new RegExp(`(${orList(data['tertiaries']['course']['subjects'])})$`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Educator.course()).to.match(re);
      });
    });
  });

  describe('#campus', () => {
    it('should return a string', () => {
      expect(Faker.Educator.campus()).to.be.a('string');
    });

    it('should start with a name', () => {
      const re = new RegExp(`^(${orList(data['names'])})`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Educator.campus()).to.match(re);
      });
    });

    it('should end with "Campus"', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Educator.campus()).to.match(/Campus$/);
      });
    });
  });
});
