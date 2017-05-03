'use strict';
const expect = require('chai').expect;
const LoremPixel = require('../../src/faker/lorem-pixel');

describe('LoremPixel', () => {
  describe('#image', () => {
    it('should return a default URL', () => {
      expect(LoremPixel.image()).to.equal('http://lorempixel.com/300/300');
    });
  });
});
