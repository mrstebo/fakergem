'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/index');
const data = require('../../data/book.json');

describe('Book', () => {
  describe('#title', () => {
    it('should return a title', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['titles']).returns('title');
      expect(Faker.Book.title()).to.eql('title');
    }));
  });

  describe('#author', () => {
    it('should return a first and last name', sinonTest(function() {
      this.stub(Faker.Name, 'firstName').returns('John');
      this.stub(Faker.Name, 'lastName').returns('Smith');
      expect(Faker.Book.author()).to.eql('John Smith');
    }));
  });

  describe('#publisher', () => {
    it('should return a publisher', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['publishers']).returns('publisher');
      expect(Faker.Book.publisher()).to.eql('publisher');
    }));
  });

  describe('#genre', () => {
    it('should return a genre', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['genres']).returns('genre');
      expect(Faker.Book.genre()).to.eql('genre');
    }));
  });
});
