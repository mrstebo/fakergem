'use strict';
const expect = require('chai').expect;
const Avatar = require('../../src/faker/avatar');
const data = require('../../data/lorem.json');

describe('Avatar', () => {
  describe('#image', () => {
    it('should return a string', () => {
      expect(Avatar.image()).to.be.a('string');
    });

    it('should return a default url', () => {
      expect(Avatar.image()).to.match(/^https\:\/\/robohash\.org\/.*?\.png\?size=300x300&set=set1/);
    });

    it('should return url with specified slug', () => {
      expect(Avatar.image('hello-world')).to.match(/^https\:\/\/robohash\.org\/hello\-world\.png\?size=300x300&set=set1/);
    });

    it('should return url with specified size', () => {
      expect(Avatar.image('test', '64x64')).to.match(/^https\:\/\/robohash\.org\/test\.png\?size=64x64&set=set1/);
    });

    it('should return url with specified format', () => {
      expect(Avatar.image('test', '300x300', 'bmp')).to.match(/^https\:\/\/robohash\.org\/test\.bmp\?size=300x300&set=set1/);
    });

    it('should return url with specified set', () => {
      expect(Avatar.image('test', '300x300', 'png', 'test_set')).to.match(/^https\:\/\/robohash\.org\/test\.png\?size=300x300&set=test_set/);
    });

    it('should return url with specified bgset', () => {
      expect(Avatar.image('test', '300x300', 'png', 'set1', 'test')).to.match(/^https\:\/\/robohash\.org\/test\.png\?size=300x300&set=set1&bgset=test/);
    });

    it('should throw is size is not in a valid format', () => {
      ['100', 'abc', '2x2x2'].forEach(size => {
        expect(() => Avatar.image('test', size)).to.throw();
      });
    });

    it('should throw is format is not in a supported', () => {
      ['gif', 'mov', '2x2x2'].forEach(format => {
        expect(() => Avatar.image('test', '300x300', format)).to.throw();
      });
    });
  });
});
