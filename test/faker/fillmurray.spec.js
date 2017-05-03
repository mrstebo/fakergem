'use strict';
const expect = require('chai').expect;
const Fillmurray = require('../../src/faker/fillmurray');

describe('Fillmurray', () => {
  describe('#image', () => {
    it('should return a default URL', () => {
      expect(Fillmurray.image()).to.equal('https://fillmurray.com/200/200');
    });

    it('should return URL with "g" is grayscale is true', () => {
      expect(Fillmurray.image(true)).to.equal('https://fillmurray.com/g/200/200');
    });

    it('should return URL with specified width', () => {
      expect(Fillmurray.image(false, 10)).to.equal('https://fillmurray.com/10/200');
    });

    it('should return URL with specified height', () => {
      expect(Fillmurray.image(false, 200, 10)).to.equal('https://fillmurray.com/200/10');
    });

    it('should throw if grayscale is not a valid boolean', () => {
      expect(() => Fillmurray.image('bad')).to.throw();
    });

    it('should throw if width is not a valid number', () => {
      expect(() => Fillmurray.image(false, 'x')).to.throw();
    });

    it('should throw if height is not a valid number', () => {
      expect(() => Fillmurray.image(false, 200, 'x')).to.throw();
    });
  });
});
