'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/book.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Book', () => {
  describe('#title', () => {
    it('should return a title', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['titles']).returns('title');
      expect(Faker.Book.title()).to.eql('title');
    }));
  });

  describe('#author', () => {
    it('should return a first and last name', test(function(this: typeof sinon) {
      this.stub(Faker.Name, 'firstName').returns('John');
      this.stub(Faker.Name, 'lastName').returns('Smith');
      expect(Faker.Book.author()).to.eql('John Smith');
    }));
  });

  describe('#publisher', () => {
    it('should return a publisher', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['publishers']).returns('publisher');
      expect(Faker.Book.publisher()).to.eql('publisher');
    }));
  });

  describe('#genre', () => {
    it('should return a genre', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['genres']).returns('genre');
      expect(Faker.Book.genre()).to.eql('genre');
    }));
  });
});
