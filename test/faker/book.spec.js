'use strict';
const expect = require('chai').expect;
const Book = require('../../src/faker/book');
const data = require('../../data/book.json');
const nameData = require('../../data/name.json');

describe('Book', () => {
  describe('#title', () => {
    it('should return a string', () => {
      expect(Book.title()).to.be.a('string');
    });

    it('should return a title', () => {
      expect(Book.title()).to.be.oneOf(data['titles']);
    });
  });

  describe('#author', () => {
    it('should return a string', () => {
      expect(Book.author()).to.be.a('string');
    });

    it('should return a first and last name', () => {
      const author = Book.author();
      expect(author.split(' ')[0]).to.be.oneOf(nameData['firstNames']);
      expect(author.split(' ')[1]).to.be.oneOf(nameData['lastNames']);
    })
  });

  describe('#publisher', () => {
    it('should return a string', () => {
      expect(Book.publisher()).to.be.a('string');
    });

    it('should return a publisher', () => {
      expect(Book.publisher()).to.be.oneOf(data['publishers']);
    });
  });

  describe('#genre', () => {
    it('should return a string', () => {
      expect(Book.genre()).to.be.a('string');
    });

    it('should return a genre', () => {
      expect(Book.genre()).to.be.oneOf(data['genres']);
    });
  });
});
