'use strict';
import { expect } from 'chai';
const Faker = require('../../src/faker');

describe('LoremFlickr', () => {
  describe('#image', () => {
    it('should return a default URL', () => {
      expect(Faker.LoremFlickr.image()).to.equal('http://loremflickr.com/300/300');
    });

    it('should return URL with specified size', () => {
      expect(Faker.LoremFlickr.image('100x120')).to.equal('http://loremflickr.com/100/120');
    });

    it('should handle empty search terms', () => {
      expect(Faker.LoremFlickr.image('300x300', null)).to.equal('http://loremflickr.com/300/300');
      expect(Faker.LoremFlickr.image('300x300', [])).to.equal('http://loremflickr.com/300/300');
    });

    it('should return URL with specified search term', () => {
      expect(Faker.LoremFlickr.image('300x300', ['faker'])).to.equal('http://loremflickr.com/300/300/faker');
    });

    it('should return URL with multiple search terms', () => {
      expect(Faker.LoremFlickr.image('300x300', ['cat', 'dog'])).to.equal('http://loremflickr.com/300/300/cat,dog');
    });

    it('should return URL with /all when matchAll is true', () => {
      expect(Faker.LoremFlickr.image('300x300', ['cat', 'dog'], true)).to.equal('http://loremflickr.com/300/300/cat,dog/all');
    });

    it('should throw is size is not in a valid format', () => {
      ['100', 'abc', '2x2x2'].forEach(size => {
        expect(() => Faker.LoremFlickr.image(size)).to.throw();
      });
    });
  });

  describe('#grayscaleImage', () => {
    it('should return a default URL', () => {
      expect(Faker.LoremFlickr.grayscaleImage()).to.equal('http://loremflickr.com/g/300/300/all');
    });

    it('should return URL with specified size', () => {
      expect(Faker.LoremFlickr.grayscaleImage('100x120')).to.equal('http://loremflickr.com/g/100/120/all');
    });

    it('should return URL with specified search term', () => {
      expect(Faker.LoremFlickr.grayscaleImage('300x300', ['faker'])).to.equal('http://loremflickr.com/g/300/300/faker');
    });

    it('should return URL with multiple search terms', () => {
      expect(Faker.LoremFlickr.grayscaleImage('300x300', ['cat', 'dog'])).to.equal('http://loremflickr.com/g/300/300/cat,dog');
    });

    it('should return URL with /all when matchAll is true', () => {
      expect(Faker.LoremFlickr.grayscaleImage('300x300', ['cat', 'dog'], true)).to.equal('http://loremflickr.com/g/300/300/cat,dog/all');
    });

    it('should throw is size is not in a valid format', () => {
      ['100', 'abc', '2x2x2'].forEach(size => {
        expect(() => Faker.LoremFlickr.grayscaleImage(size)).to.throw();
      });
    });

    it('should throw if no search terms specified', () => {
      expect(() => Faker.LoremFlickr.grayscaleImage('300x300', null)).to.throw();
      expect(() => Faker.LoremFlickr.grayscaleImage('300x300', [])).to.throw();
    });
  });

  describe('#pixelatedImage', () => {
    it('should return a default URL', () => {
      expect(Faker.LoremFlickr.pixelatedImage()).to.equal('http://loremflickr.com/p/300/300/all');
    });

    it('should return URL with specified size', () => {
      expect(Faker.LoremFlickr.pixelatedImage('100x120')).to.equal('http://loremflickr.com/p/100/120/all');
    });

    it('should return URL with specified search term', () => {
      expect(Faker.LoremFlickr.pixelatedImage('300x300', ['faker'])).to.equal('http://loremflickr.com/p/300/300/faker');
    });

    it('should return URL with multiple search terms', () => {
      expect(Faker.LoremFlickr.pixelatedImage('300x300', ['cat', 'dog'])).to.equal('http://loremflickr.com/p/300/300/cat,dog');
    });

    it('should return URL with /all when matchAll is true', () => {
      expect(Faker.LoremFlickr.pixelatedImage('300x300', ['cat', 'dog'], true)).to.equal('http://loremflickr.com/p/300/300/cat,dog/all');
    });

    it('should throw is size is not in a valid format', () => {
      ['100', 'abc', '2x2x2'].forEach(size => {
        expect(() => Faker.LoremFlickr.pixelatedImage(size)).to.throw();
      });
    });

    it('should throw if no search terms specified', () => {
      expect(() => Faker.LoremFlickr.pixelatedImage('300x300', null)).to.throw();
      expect(() => Faker.LoremFlickr.pixelatedImage('300x300', [])).to.throw();
    });
  });

  describe('#colorizedImage', () => {
    it('should return a default URL', () => {
      expect(Faker.LoremFlickr.colorizedImage()).to.equal('http://loremflickr.com/red/300/300/all');
    });

    it('should return URL with specified size', () => {
      expect(Faker.LoremFlickr.colorizedImage('100x120')).to.equal('http://loremflickr.com/red/100/120/all');
    });

    ['red', 'green', 'blue'].forEach(color => {
      it(`should support the ${color} colorization`, () => {
        expect(Faker.LoremFlickr.colorizedImage('300x300', color)).to.equal(`http://loremflickr.com/${color}/300/300/all`);
      });
    });

    it('should return URL with specified search term', () => {
      expect(Faker.LoremFlickr.colorizedImage('300x300', 'red', ['faker'])).to.equal('http://loremflickr.com/red/300/300/faker');
    });

    it('should return URL with multiple search terms', () => {
      expect(Faker.LoremFlickr.colorizedImage('300x300', 'red', ['cat', 'dog'])).to.equal('http://loremflickr.com/red/300/300/cat,dog');
    });

    it('should return URL with /all when matchAll is true', () => {
      expect(Faker.LoremFlickr.colorizedImage('300x300', 'red', ['cat', 'dog'], true)).to.equal('http://loremflickr.com/red/300/300/cat,dog/all');
    });

    it('should throw is size is not in a valid format', () => {
      ['100', 'abc', '2x2x2'].forEach(size => {
        expect(() => Faker.LoremFlickr.colorizedImage(size)).to.throw();
      });
    });

    it('should throw if colorization is not supported', () => {
      ['yellow', 'orange', 'brown', 'black', 'white'].forEach(color => {
        expect(() => Faker.LoremFlickr.colorizedImage('300x300', color)).to.throw();
      });
    });

    it('should throw if no search terms specified', () => {
      expect(() => Faker.LoremFlickr.colorizedImage('300x300', 'red', null)).to.throw();
      expect(() => Faker.LoremFlickr.colorizedImage('300x300', 'red', [])).to.throw();
    });
  });
});
