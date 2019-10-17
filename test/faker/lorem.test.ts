'use strict';
import { expect } from 'chai';
import Faker from '../../src/index';
import data from '../../src/data/lorem.json';

describe('Lorem', () => {
  describe('#word', () => {
    it('should return a string', () => {
      expect(Faker.Lorem.word()).to.be.a('string');
    });

    it('should return a word', () => {
      expect(Faker.Lorem.word()).to.be.oneOf(data['words']);
    });
  });

  describe('#words', () => {
    it('should return an array', () => {
      expect(Faker.Lorem.words()).to.be.a('array');
    });

    it('should return a specified number of words', () => {
      expect(Faker.Lorem.words(50)).to.have.lengthOf(50);
    });

    it('should return words', () => {
      Faker.Lorem.words(50).forEach(word => {
        expect(word).to.be.oneOf(data['words']);
      });
    });

    it('should return supplemental words if specified', () => {
      const supplementals = Faker.Lorem.words(200, true)
        .filter(word => data['supplemental'].indexOf(word) >= 0);
      expect(supplementals.length).to.be.within(0, 200);
    });
  });

  describe('#characters', () => {
    it('should return a string', () => {
      expect(Faker.Lorem.characters()).to.be.a('string');
    });

    it('should return a specified number of characters', () => {
      expect(Faker.Lorem.characters(50)).to.have.lengthOf(50);
    });

    it('should return numbers from "0" to "9" and characters "a" to "z"', () => {
      expect(Faker.Lorem.characters(200)).to.match(/^[0-9a-z]+$/);
    });

    it('should return empty string if number of characters is less than 1', () => {
      expect(Faker.Lorem.characters(-1)).to.equal('');
    });
  });

  describe('#sentence', () => {
    it('should return a string', () => {
      expect(Faker.Lorem.sentence()).to.be.a('string');
    });

    it('should return a specified number of words', () => {
      expect(Faker.Lorem.sentence(10, false, 0).match(/\w+[\s\.]/g) || []).to.be.lengthOf(10);
    });

    it('should return supplemental words if specified', () => {
      const supplementals = Faker.Lorem.sentence(50, true)
        .split(' ')
        .filter(word => data['supplemental'].indexOf(word) >= 0);
      expect(supplementals.length).to.be.at.within(0, 50);
    });

    it('should include random words if specified', () => {
      const words = Faker.Lorem.sentence(0, false, 10).match(/\w+/g) || [];
      expect(words.length).to.be.within(0, 10);
    });

    it('should return empty string if number of words is less than 1', () => {
      expect(Faker.Lorem.sentence(-1, false, 0)).to.equal('');
    });
  });

  describe('#sentences', () => {
    it('should return an array', () => {
      expect(Faker.Lorem.sentences()).to.be.a('array');
    });

    it('should return a specified number of sentences', () => {
      expect(Faker.Lorem.sentences(50)).to.have.lengthOf(50);
    });

    it('should return supplemental words if specified', () => {
      const supplementals = Faker.Lorem.sentences(50, true)
        .filter(sentence => sentence.split(' ')
          .filter(word => data['supplemental'].indexOf(word) >= 0)
        );
      expect(supplementals.length).to.be.at.least(1);
    });

    it('should return empty array if number of sentences is less than 1', () => {
      expect(Faker.Lorem.sentences(-1)).to.have.lengthOf(0);
    });
  });

  describe('#paragraph', () => {
    it('should return a string', () => {
      expect(Faker.Lorem.paragraph()).to.be.a('string');
    });

    it('should return a specified number of sentences', () => {
      expect(Faker.Lorem.paragraph(10, false, 0).match(/.*?\./g)).to.have.lengthOf(10);
    });

    it('should return supplemental words if specified', () => {
      const supplementals = Faker.Lorem.paragraph(50, true)
        .split(' ')
        .filter(word => data['supplemental'].indexOf(word) >= 0);
      expect(supplementals.length).to.be.at.least(1);
    });

    it('should include random sentences if specified', () => {
      const sentences = Faker.Lorem.paragraph(0, false, 10).match(/.*?\./g) || [];
      expect(sentences.length).to.be.within(0, 10);
    });

    it('should return empty string if number of sentences is less than 1', () => {
      expect(Faker.Lorem.paragraph(-1, false, 0)).to.equal('');
    });
  });

  describe('#paragraphs', () => {
    it('should return an array', () => {
      expect(Faker.Lorem.paragraphs()).to.be.a('array');
    });

    it('should return a specified number of paragraphs', () => {
      expect(Faker.Lorem.paragraphs(50)).to.have.lengthOf(50);
    });

    it('should return supplemental words if specified', () => {
      const supplementals = Faker.Lorem.paragraphs(50, true)
        .filter(paragraph => paragraph.split(' ')
          .filter(word => data['supplemental'].indexOf(word) >= 0)
        );
      expect(supplementals.length).to.be.at.least(1);
    });

    it('should return empty array if number of paragraphs is less than 1', () => {
      expect(Faker.Lorem.paragraphs(-1)).to.have.lengthOf(0);
    });
  });
});
