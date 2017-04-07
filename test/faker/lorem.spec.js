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
    it('should return a string', () => {
      expect(Lorem.characters()).to.be.a('string');
    });

    it('should return a specified number of characters', () => {
      [...Array(50).keys()].forEach(i => {
        expect(Lorem.characters(i)).to.have.lengthOf(i);
      });
    });

    it('should return numbers from "0" to "9" and characters "a" to "z"', () => {
      [...Array(100).keys()].forEach(i => {
        expect(Lorem.characters(1)).to.match(/^[0-9a-z]$/);
      });
    });

    it('should return empty string if number of characters is less than 1', () => {
      expect(Lorem.characters(-1)).to.equal('');
    });
  });

  describe('#sentence', () => {
    it('should return a string', () => {
      expect(Lorem.sentence()).to.be.a('string');
    });

    it('should return a specified number of words', () => {
      [...Array(50).keys()].map(i => i + 1).forEach(i => {
        expect(Lorem.sentence(i, false, 0).split(' ')).to.be.lengthOf(i);
      });
    });

    it('should return empty string if number of words is less than 1', () => {
      expect(Lorem.sentence(-1, false, 0)).to.equal('');
    });
  });

  describe('#sentences', () => {
    it('should return an array', () => {
      expect(Lorem.sentences()).to.be.a('array');
    });

    it('should rturn a specified number of sentences', () => {
      [...Array(50).keys()].forEach(i => {
        expect(Lorem.sentences(i)).to.have.lengthOf(i);
      });
    });
  });

  describe('#paragraph', () => {

  });

  describe('#paragraphs', () => {

  });
});
