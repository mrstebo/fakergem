'use strict';
import { expect } from 'chai';
import Faker from '../../src/index';

describe('LoremPixel', () => {
  describe('#image', () => {
    it('should return a default URL', () => {
      expect(Faker.LoremPixel.image()).to.equal('http://lorempixel.com/300/300');
    });

    it('should return URL with specified size', () => {
      expect(Faker.LoremPixel.image('100x120')).to.equal('http://lorempixel.com/100/120');
    });

    it('should return URL with "g" section if isGray is true', () => {
      expect(Faker.LoremPixel.image('300x300', true)).to.equal('http://lorempixel.com/g/300/300');
    });

    it('should return URL with specified category', () => {
      ['abstract', 'animals', 'business', 'cats', 'city', 'food', 'nightlife', 'fashion', 'people', 'nature', 'sports', 'technics', 'transport'].forEach(category => {
        expect(Faker.LoremPixel.image('300x300', false, category)).to.equal(`http://lorempixel.com/300/300/${category}`);
      });
    });

    it('should return URL with specified category and number', () => {
      expect(Faker.LoremPixel.image('300x300', false, 'abstract', 1)).to.equal('http://lorempixel.com/300/300/abstract/1');
    });

    it('should return URL with specified category, number and text', () => {
      expect(Faker.LoremPixel.image('300x300', false, 'abstract', 1, 'faker')).to.equal('http://lorempixel.com/300/300/abstract/1/faker');
    });

    it('should throw if size is not in a valid format', () => {
      ['100', 'abc', '2x2x2'].forEach(size => {
        expect(() => Faker.LoremPixel.image(size)).to.throw();
      });
    });

    it('should throw if category not supported', () => {
      ['a', '123', 'bad'].forEach(category => {
        expect(() => Faker.LoremPixel.image('300x300', false, category)).to.throw();
      });
    });

    it('should throw if number is not valid', () => {
      [0, 11, 100].forEach(number => {
        expect(() => Faker.LoremPixel.image('300x300', false, null, number)).to.throw();
      });
    });

    it('should throw if number is specified, but category is not', () => {
      expect(() => Faker.LoremPixel.image('300x300', false, null, 1)).to.throw();
    });

    it('should throw if text is specified, but category and number are not', () => {
      expect(() => Faker.LoremPixel.image('300x300', false, null, null, 'faker')).to.throw();
    });
  });
});
