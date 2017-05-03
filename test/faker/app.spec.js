'use strict';
const expect = require('chai').expect;
const App = require('../../src/faker/app');
const data = require('../../data/app.json');
const nameData = require('../../data/name.json');

describe('App', () => {
  describe('#name', () => {
    it('should return a name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(App.name()).to.be.oneOf(data['names']);
      });
    });
  });

  describe('#version', () => {
    it('should return a version format', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(App.version()).to.match(/(?:#|\d+)\.(?:[#]+|\d+)(?:\.(?:[#]+|\d+))?/);
      });
    });
  });

  describe('#author', () => {
    it('should return a name', () => {
      [...Array(100).keys()].forEach(_ => {
        const author = App.author();
        expect(author.split(' ')[0]).to.be.oneOf(nameData['firstNames']);
        expect(author.split(' ')[1]).to.be.oneOf(nameData['lastNames']);
      });
    });
  });
});
