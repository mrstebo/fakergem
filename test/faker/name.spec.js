'use strict';
const expect = require('chai').expect;
const Name = require('../../src/faker/name');
const data = require('../../data/name.json');

describe('Name', () => {
  describe('#name', () => {
    it('should return a first and last name', () => {
      [...Array(100).keys()].forEach(_ => {
        const name = Name.name();
        expect(name.split(' ')[0]).to.be.oneOf(data['firstNames']);
        expect(name.split(' ')[1]).to.be.oneOf(data['lastNames']);
      });
    });
  });

  describe('#nameWithMiddle', () => {
    it('should return two first names and a last name', () => {
      [...Array(100).keys()].forEach(_ => {
        const name = Name.nameWithMiddle();
        expect(name.split(' ')[0]).to.be.oneOf(data['firstNames']);
        expect(name.split(' ')[1]).to.be.oneOf(data['firstNames']);
        expect(name.split(' ')[2]).to.be.oneOf(data['lastNames']);
      });
    });
  });

  describe('#firstName', () => {
    it('should return a first name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Name.firstName()).to.be.oneOf(data['firstNames']);
      });
    });
  });

  describe('#lastName', () => {
    it('should return a last name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Name.lastName()).to.be.oneOf(data['lastNames']);
      });
    });
  });

  describe('#prefix', () => {
    it('should return a prefix', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Name.prefix()).to.be.oneOf(data['prefixes']);
      });
    });
  });

  describe('#suffix', () => {
    it('should return a suffix', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Name.suffix()).to.be.oneOf(data['suffixes']);
      });
    });
  });

  describe('#title', () => {
    it('should return a title descriptor, level and job', () => {
      [...Array(100).keys()].forEach(_ => {
        const title = Name.title();
        expect(title.split(' ')[0]).to.be.oneOf(data['titles']['descriptor']);
        expect(title.split(' ')[1]).to.be.oneOf(data['titles']['level']);
        expect(title.split(' ')[2]).to.be.oneOf(data['titles']['job']);
      });
    });
  });
});
