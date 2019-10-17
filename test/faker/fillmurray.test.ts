'use strict';
import { expect } from 'chai';
const Faker = require('../../src/faker');

describe('Fillmurray', () => {
  describe('#image', () => {
    it('should return a default URL', () => {
      expect(Faker.Fillmurray.image()).to.equal('https://fillmurray.com/200/200');
    });

    it('should return URL with "g" is grayscale is true', () => {
      expect(Faker.Fillmurray.image(true)).to.equal('https://fillmurray.com/g/200/200');
    });

    it('should return URL with specified width', () => {
      expect(Faker.Fillmurray.image(false, 10)).to.equal('https://fillmurray.com/10/200');
    });

    it('should return URL with specified height', () => {
      expect(Faker.Fillmurray.image(false, 200, 10)).to.equal('https://fillmurray.com/200/10');
    });

    it('should throw if grayscale is not a valid boolean', () => {
      expect(() => Faker.Fillmurray.image('bad')).to.throw();
    });

    it('should throw if width is not a valid number', () => {
      expect(() => Faker.Fillmurray.image(false, 'x')).to.throw();
    });

    it('should throw if height is not a valid number', () => {
      expect(() => Faker.Fillmurray.image(false, 200, 'x')).to.throw();
    });
  });
});
