import {expect} from 'chai';
import * as Lorem from '../../lib/faker/lorem';
import data from '../../data/lorem.json';

describe('Lorem', () => {
  describe('#word', () => {
    it('should return a string', () => {
      expect(Lorem.word()).to.be.a('string');
    });

    it('should return a word', () => {
      expect(Lorem.word()).to.be.oneOf(data['words']);
    });
  });

  describe('#words', () => {
    it('should return an array', () => {
      expect(Lorem.words()).to.be.a('array');
    });

    it('should return a specified number of words', () => {
      [...Array(300).keys()].forEach(i => {
        expect(Lorem.words(i)).to.have.lengthOf(i);
      });
    });

    it('should return words', () => {
      [...Array(30).keys()].forEach(i => {
        Lorem.words(i).forEach(word => {
          expect(word).to.be.oneOf(data['words']);
        });
      });
    });
  });

  describe('#characters', () => {

  });

  describe('#sentence', () => {

  });

  describe('#sentences', () => {

  });

  describe('#paragraph', () => {

  });

  describe('#paragraphs', () => {

  });
});
