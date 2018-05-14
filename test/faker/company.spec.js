'use strict';
const expect = require('chai').expect;
const orList = require('../support/regexp').orList;
const Faker = require('../../src/faker');
const data = require('../../data/company.json');

describe('Company', () => {
  describe('#name', () => {
    it('should return a name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Company.name()).to.be.oneOf(data['names']);
      });
    });
  });

  describe('#suffix', () => {
    it('should return a suffix', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Company.suffix()).to.be.oneOf(data['suffixes']);
      });
    });
  });

  describe('#catchPhrase', () => {
    it('should return a catchPhrase', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Company.catchPhrase()).to.match(/.*?\s.*?\s.*/);
      });
    });

    it('should contain a buzzword', () => {
      const buzzwords = [
        ...data['buzzwords'][0],
        ...data['buzzwords'][1],
        ...data['buzzwords'][2]
      ];
      const re = new RegExp(`(${orList(buzzwords)})`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Company.catchPhrase()).to.match(re);
      });
    });
  });

  describe('#buzzword', () => {
    it('should return a buzzword', () => {
      const buzzwords = [
        ...data['buzzwords'][0],
        ...data['buzzwords'][1],
        ...data['buzzwords'][2]
      ];
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Company.buzzword()).to.be.oneOf(buzzwords);
      });
    });
  });

  describe('#bs', () => {
    it('should return a bs', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Company.bs()).to.match(/.*?\s.*?\s.*/);
      });
    });

    it('should contain a bs', () => {
      const bsData = [
        ...data['bs'][0],
        ...data['bs'][1],
        ...data['bs'][2]
      ];
      const re = new RegExp(`(${orList(bsData)})`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Company.bs()).to.match(re);
      });
    });
  });

  describe('#ein', () => {
    it('should return an EIN', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Company.ein()).to.match(/^\d{2}-\d{7}$/);
      });
    });
  });

  describe('#dunsNumber', () => {
    it('should return a DUNS Number', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Company.dunsNumber()).to.match(/^\d{2}-\d{3}-\d{4}$/);
      });
    });
  });

  describe('#logo', () => {
    it('should return URL to a logo', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Company.logo()).to.match(/https:\/\/pigment.github.io\/fake-logos\/logos\/medium\/color\/\d{1,2}\.png/);
      });
    });
  });

  describe('#swedishOrganisationNumber', () => {
    it('should return a Swedish Organisation Number', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Company.swedishOrganisationNumber()).to.match(/^[1-9]\d[2-9]\d{6}\d+$/);
      });
    });
  });

  describe('#norwegianOrganisationNumber', () => {
    it('should return a Norwegian Organisation Number', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Company.norwegianOrganisationNumber()).to.match(/^[8-9]\d{8}$/);
      });
    });
  });

  describe('#australianBusinessNumber', () => {
    it('should return a Australian Business Number', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Company.australianBusinessNumber()).to.match(/^\d{11}$/);
      });
    });
  });

  describe('#profession', () => {
    it('should return a profession', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Company.profession()).to.be.oneOf(data['professions']);
      });
    });
  });
});
