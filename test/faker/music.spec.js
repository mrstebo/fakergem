'use strict';
const expect = require('chai').expect;
const Music = require('../../src/faker/music');
const data = require('../../data/music.json');

describe('Music', () => {
  describe('#key', () => {
    it('should return a key', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Music.key()[0]).to.be.oneOf(data['keys']);
      });
    });

    it('should return a variant', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Music.key().slice(1)).to.be.oneOf(data['keyVariants']);
      });
    });
  });

  describe('#chord', () => {
    it('should return a chord', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Music.chord()[0]).to.be.oneOf(data['keys']);
      });
    });

    it('should return a chord type', () => {
      expect(Music.chord().slice(1)).to.be.oneOf(data['chordTypes']);
    });
  });

  describe('#instrument', () => {
    it('should return a instrument', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Music.instrument()).to.be.oneOf(data['instruments']);
      });
    });
  });
});
