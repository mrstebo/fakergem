'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/hipster.json';
import loremData from '../../src/data/lorem.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Hipster', () => {
  describe('#word', () => {
    it('should return a word', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['words']).returns('word');
      expect(Faker.Hipster.word()).to.eql('word');
    }));

    it('should make sure only a single word is returned', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['words'])
        .onFirstCall().returns('two words')
        .onSecondCall().returns('word');
      expect(Faker.Hipster.word()).to.eql('word');
    }));
  });

  describe('#words', () => {
    it('should return words', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'assortment').withArgs(data['words'], 3).returns([
        'I',
        'am',
        'Sparta!'
      ]);
      expect(Faker.Hipster.words()).to.eql(['I', 'am', 'Sparta!']);
    }));

    it('should return a specified number of words', () => {
      expect(Faker.Hipster.words(50)).to.have.lengthOf(50);
    });

    it('should convert spaces to words by default', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'assortment').returns(['I', 'word with space', 'Sparta!']);
      this.stub(Faker.Random, 'element').withArgs(data['words']).returns('AM');
      expect(Faker.Hipster.words()).to.eql(['I', 'AM', 'Sparta!']);
    }));

    it('should return supplemental words if specified', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'assortment').withArgs([...data['words'], loremData['words']], 3).returns([
        'I',
        'am',
        'Sparta!'
      ]);
      expect(Faker.Hipster.words(3, true)).to.eql(['I', 'am', 'Sparta!']);
    }));

    it('should not convert spaces if specified', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'assortment').returns(['I', '', 'Sparta!']);
      expect(Faker.Hipster.words(3, true, true)).to.eql(['I', '', 'Sparta!']);
    }));
  });

  describe('#sentence', () => {
    it('should return a sentence', test(function(this: typeof sinon) {
      this.stub(Faker.Hipster, 'words').returns([
        'this', 'is', 'a', 'sentence'
      ]);
      expect(Faker.Hipster.sentence()).to.eql('This is a sentence.');
    }));

    it('should return a sentence with a specified number of words', test(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').withArgs(0, 6).returns(1);
      this.stub(Faker.Hipster, 'words').withArgs(7, false, true).returns([
        'this', 'is', 'a', 'much', 'longer', 'sentence'
      ]);
      expect(Faker.Hipster.sentence(6)).to.eql('This is a much longer sentence.');
    }));

    it('should return supplemental words if specified', test(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').withArgs(0, 6).returns(1);
      this.stub(Faker.Hipster, 'words').withArgs(5, true, true).returns([
        'this', 'is', 'a', 'sentence'
      ]);
      expect(Faker.Hipster.sentence(4, true)).to.eql('This is a sentence.');
    }));

    it('should include random words if specified', test(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').withArgs(0, 1).returns(1);
      this.stub(Faker.Hipster, 'words').withArgs(5, false, true).returns([
        'this', 'is', 'a', 'sentence'
      ]);
      expect(Faker.Hipster.sentence(4, false, 1)).to.eql('This is a sentence.');
    }));

    it('should return empty string if number of words is less than 1', () => {
      expect(Faker.Hipster.sentence(-1, false, 0)).to.eql('');
    });
  });

  describe('#sentences', () => {
    it('should return sentences', test(function(this: typeof sinon) {
      this.stub(Faker.Hipster, 'sentence').withArgs(3, false).returns('This is Sparta.');
      expect(Faker.Hipster.sentences()).to.eql([
        'This is Sparta.',
        'This is Sparta.',
        'This is Sparta.'
      ]);
    }));

    it('should return a specified number of sentences', () => {
      expect(Faker.Hipster.sentences(5)).to.have.lengthOf(5);
    });

    it('should return supplemental words if specified', test(function(this: typeof sinon) {
      this.stub(Faker.Hipster, 'sentence').withArgs(3, true).returns('This is Sparta.');
      expect(Faker.Hipster.sentences(3, true)).to.eql([
        'This is Sparta.',
        'This is Sparta.',
        'This is Sparta.'
      ]);
    }));

    it('should return empty array if number of sentences is less than 1', () => {
      expect(Faker.Hipster.sentences(-1)).to.have.lengthOf(0);
    });
  });

  describe('#paragraph', () => {
    it('should return a paragraph', test(function(this: typeof sinon) {
      this.stub(Faker.Hipster, 'sentences').returns([
        'This is a test.',
        'This was a test.',
        'The test has finished.'
      ]);
      expect(Faker.Hipster.paragraph()).to.eql('This is a test. This was a test. The test has finished.');
    }));

    it('should return a specified number of sentences', test(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').returns(0);
      this.stub(Faker.Hipster, 'sentences').withArgs(3, false).returns([
        'This is a test.',
        'This was a test.',
        'The test has finished.'
      ]);
      expect(Faker.Hipster.paragraph(3)).to.eql('This is a test. This was a test. The test has finished.');
    }));

    it('should return supplemental words if specified', test(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').returns(0);
      this.stub(Faker.Hipster, 'sentences').withArgs(3, true).returns([
        'This is a test.',
        'This was a test.',
        'The test has finished.'
      ]);
      expect(Faker.Hipster.paragraph(3, true)).to.eql('This is a test. This was a test. The test has finished.');
    }));

    it('should include random sentences if specified', test(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').returns(1);
      this.stub(Faker.Hipster, 'sentences').withArgs(3, true).returns([
        'This is a test.',
        'This was a test.',
        'The test has finished.'
      ]);
      expect(Faker.Hipster.paragraph(2, true, 1)).to.eql('This is a test. This was a test. The test has finished.');
    }));

    it('should return empty string if number of sentences is less than 1', () => {
      expect(Faker.Hipster.paragraph(-1, false, 0)).to.equal('');
    });
  });

  describe('#paragraphs', () => {
    it('should return paragraphs', test(function(this: typeof sinon) {
      this.stub(Faker.Hipster, 'paragraph').returns('This is a test.');
      expect(Faker.Hipster.paragraphs()).to.eql([
        'This is a test.',
        'This is a test.',
        'This is a test.'
      ]);
    }));

    it('should return a specified number of paragraphs', () => {
      expect(Faker.Hipster.paragraphs(50)).to.have.lengthOf(50);
    });

    it('should return supplemental words if specified', test(function(this: typeof sinon) {
      this.stub(Faker.Hipster, 'paragraph').withArgs(3, true).returns('This is a test.');
      expect(Faker.Hipster.paragraphs(3, true)).to.eql([
        'This is a test.',
        'This is a test.',
        'This is a test.'
      ]);
    }));

    it('should return empty array if number of paragraphs is less than 1', () => {
      expect(Faker.Hipster.paragraphs(-1)).to.have.lengthOf(0);
    });
  });
});
