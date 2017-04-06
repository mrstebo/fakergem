import {expect} from 'chai';
import * as Name from '../../lib/faker/name';
import data from '../../data/name.json';

describe('Name', () => {
  describe('#name', () => {
    it('should return a string', () => {
      expect(Name.name()).to.be.a('string');
    });

    it('should return a first and last name', () => {
      const name = Name.name();
      expect(name.split(' ')[0]).to.be.oneOf(data['firstNames']);
      expect(name.split(' ')[1]).to.be.oneOf(data['lastNames']);
    });
  });

  describe('#nameWithMiddle', () => {
    it('should return a string', () => {
      expect(Name.nameWithMiddle()).to.be.a('string');
    });

    it('should return two first names and a last name', () => {
      const name = Name.nameWithMiddle();
      expect(name.split(' ')[0]).to.be.oneOf(data['firstNames']);
      expect(name.split(' ')[1]).to.be.oneOf(data['firstNames']);
      expect(name.split(' ')[2]).to.be.oneOf(data['lastNames']);
    });
  });

  describe('#firstName', () => {
    it('should return a string', () => {
      expect(Name.firstName()).to.be.a('string');
    });

    it('should return a first name', () => {
      expect(Name.firstName()).to.be.oneOf(data['firstNames']);
    });
  });

  describe('#lastName', () => {
    it('should return a string', () => {
      expect(Name.lastName()).to.be.a('string');
    });

    it('should return a last name', () => {
      expect(Name.lastName()).to.be.oneOf(data['lastNames']);
    });
  });

  describe('#prefix', () => {
    it('should return a string', () => {
      expect(Name.prefix()).to.be.a('string');
    });

    it('should return a prefix', () => {
      expect(Name.prefix()).to.be.oneOf(data['prefixes']);
    });
  });

  describe('#suffix', () => {
    it('should return a string', () => {
      expect(Name.suffix()).to.be.a('string');
    });

    it('should return a suffix', () => {
      expect(Name.suffix()).to.be.oneOf(data['suffixes']);
    });
  });

  describe('#title', () => {
    it('should return a string', () => {
      expect(Name.title()).to.be.a('string');
    });

    it('should return a title descriptor, level and job', () => {
      const title = Name.title();
      expect(title.split(' ')[0]).to.be.oneOf(data['titles']['descriptor']);
      expect(title.split(' ')[1]).to.be.oneOf(data['titles']['level']);
      expect(title.split(' ')[2]).to.be.oneOf(data['titles']['job']);
    });
  });
});
