'use strict';
const expect = require('chai').expect;
const Hipster = require('../../src/faker/hipster');
const data = require('../../data/hipster.json');
const loremData = require('../../data/lorem.json');

describe('Hipster', () => {
  describe('#word', () => {
    it('should return a string', () => {
      expect(Hipster.word()).to.be.a('string');
    });

    it('should return a word', () => {
      expect(Hipster.word()).to.be.oneOf(data['words']);
    });
  });

  describe('#words', () => {
    it('should return an array', () => {
      expect(Hipster.words()).to.be.a('array');
    });

    it('should return a specified number of words', () => {
      expect(Hipster.words(50)).to.have.lengthOf(50);
    });

    it('should return words', () => {
      Hipster.words(50).forEach(word => {
        expect(word).to.be.oneOf(data['words']);
      });
    });

    it('should return supplemental words if specified', () => {
      const supplementals = Hipster.words(200, true)
        .filter(word => loremData['words'].indexOf(word) >= 0);
      expect(supplementals).to.have.length.within(0, 200);
    });
  });

  describe('#sentence', () => {
    it('should return a string', () => {
      expect(Hipster.sentence()).to.be.a('string');
    });

    it('should return minimum specified number of words', () => {
      expect(Hipster.sentence(10, false, 0).match(/\w+[\s\.]/g) || []).to.have.length.above(9);
    });

    it('should return supplemental words if specified', () => {
      const supplementals = Hipster.sentence(50, true)
        .split(' ')
        .filter(word => loremData['words'].indexOf(word) >= 0);
      expect(supplementals).to.have.length.within(0, 50);
    });

    it('should include random words if specified', () => {
      const words = Hipster.sentence(0, false, 10).match(/\w+/g) || [];
      expect(words).to.have.length.within(0, 10);
    });

    it('should return empty string if number of words is less than 1', () => {
      expect(Hipster.sentence(-1, false, 0)).to.equal('');
    });
  });

  describe('#sentences', () => {
    it('should return an array', () => {
      expect(Hipster.sentences()).to.be.a('array');
    });

    it('should return a specified number of sentences', () => {
      expect(Hipster.sentences(50)).to.have.lengthOf(50);
    });

    it('should return supplemental words if specified', () => {
      const supplementals = Hipster.sentences(50, true)
        .filter(sentence => sentence.split(' ')
          .filter(word => loremData['words'].indexOf(word) >= 0)
        );
      expect(supplementals).to.have.length.within(0, 50);
    });

    it('should return empty array if number of sentences is less than 1', () => {
      expect(Hipster.sentences(-1)).to.have.lengthOf(0);
    });
  });

  describe('#paragraph', () => {
    it('should return a string', () => {
      expect(Hipster.paragraph()).to.be.a('string');
    });

    it('should return a specified number of sentences', () => {
      expect(Hipster.paragraph(10, false, 0).match(/.*?\./g)).to.have.lengthOf(10);
    });

    it('should return supplemental words if specified', () => {
      const supplementals = Hipster.paragraph(50, true)
        .split(' ')
        .filter(word => loremData['words'].indexOf(word) >= 0);
      expect(supplementals).to.have.length.within(0, 50);
    });

    it('should include random sentences if specified', () => {
      const sentences = Hipster.paragraph(0, false, 10).match(/.*?\./g) || [];
      expect(sentences).to.have.length.within(0, 10);
    });

    it('should return empty string if number of sentences is less than 1', () => {
      expect(Hipster.paragraph(-1, false, 0)).to.equal('');
    });
  });

  describe('#paragraphs', () => {
    it('should return an array', () => {
      expect(Hipster.paragraphs()).to.be.a('array');
    });

    it('should return a specified number of paragraphs', () => {
      expect(Hipster.paragraphs(50)).to.have.lengthOf(50);
    });

    it('should return supplemental words if specified', () => {
      const supplementals = Hipster.paragraphs(50, true)
        .filter(paragraph => paragraph.split(' ')
          .filter(word => loremData['words'].indexOf(word) >= 0)
        );
      expect(supplementals).to.have.length.within(0, 50);
    });

    it('should return empty array if number of paragraphs is less than 1', () => {
      expect(Hipster.paragraphs(-1)).to.have.lengthOf(0);
    });
  });
});
