'use strict';
const expect = require('chai').expect;
const App = require('../../src/faker/app');
const data = require('../../data/app.json');
const nameData = require('../../data/name.json');

describe('App', () => {
  describe('#name', () => {
    it('should return a string', () => {
      expect(App.name()).to.be.a('string');
    });

    it('should return a name', () => {
      expect(App.name()).to.be.oneOf(data['names']);
    });
  });

  describe('#version', () => {
    it('should return a string', () => {
      expect(App.version()).to.be.a('string');
    });

    it('should return a version format', () => {
      expect(App.version()).to.match(/(?:#|\d+)\.(?:[#]+|\d+)(?:\.(?:[#]+|\d+))?/);
    });
  });

  describe('#author', () => {
    it('should return a string', () => {
      expect(App.author()).to.be.a('string');
    });

    it('should return a name', () => {
      const author = App.author();
      expect(author.split(' ')[0]).to.be.oneOf(nameData['firstNames']);
      expect(author.split(' ')[1]).to.be.oneOf(nameData['lastNames']);
    });
  });
});
