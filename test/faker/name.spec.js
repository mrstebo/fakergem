import {expect} from 'chai';
import * as Name from '../../lib/faker/name';

describe('Name', () => {
  describe('#name', () => {
    it('should return a string', () => {
      expect(Name.name()).to.be.a('string');
    });
  });

  describe('#nameWithMiddle', () => {
    it('should return a string', () => {
      expect(Name.nameWithMiddle()).to.be.a('string');
    });
  });

  describe('#firstName', () => {
    it('should return a string', () => {
      expect(Name.firstName()).to.be.a('string');
    });
  });

  describe('#lastName', () => {
    it('should return a string', () => {
      expect(Name.lastName()).to.be.a('string');
    });
  });

  describe('#prefix', () => {
    it('should return a string', () => {
      expect(Name.prefix()).to.be.a('string');
    });
  });

  describe('#suffix', () => {
    it('should return a string', () => {
      expect(Name.suffix()).to.be.a('string');
    });
  });

  describe('#title', () => {
    it('should return a string', () => {
      expect(Name.title()).to.be.a('string');
    });
  });
});
