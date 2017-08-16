'use strict';
const expect = require('chai').expect;
const Twitter = require('../../src/faker/twitter');
const nameData = require('../../data/name.json');

describe('Twitter', () => {
  describe('#user', () => {

  });

  describe('#status', () => {

  });

  describe('#screenName', () => {
    it('should contain a first and last name', () => {
      const screenName = Twitter.screenName();
      expect(screenName.split('_')[0]).to.be.oneOf(nameData['firstNames']);
      expect(screenName.split('_')[1]).to.be.oneOf(nameData['lastNames']);
    });

    it('should contain an underscore separator', () => {
      expect(Twitter.screenName()).to.match(/\w+\_\w+/);
    });

    it('should not be longer than 20 characters', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Twitter.screenName().length).to.be.within(0, 20);
      });
    });
  });
});
