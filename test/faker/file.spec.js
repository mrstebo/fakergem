'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/file.json');
const loremData = require('../../data/lorem.json');

describe('File', () => {
  describe('#extension', () => {
    it('should return an extension', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.File.extension()).to.be.oneOf(data['extensions']);
      });
    });
  });

  describe('#mimeType', () => {
    it('should return an extension', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.File.mimeType()).to.be.oneOf(data['mimeTypes']);
      });
    });
  });

  describe('#fileName', () => {
    it('should return a filename', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.File.fileName()).to.match(/^([a-z]|\-)+\/\w+\.\w+$/);
      });
    });

    it('should return a filename with specified directory', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.File.fileName('test')).to.match(/^test\/\w+\.\w+$/);
      });
    });

    it('should return a filename with specified name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.File.fileName('test', 'name')).to.match(/^test\/name\.\w+$/);
      });
    });

    it('should return a filename with specified extension', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.File.fileName('test', 'name', 'ext')).to.match(/^test\/name\.ext$/);
      });
    });

    it('should return a filename with specified directory separator', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.File.fileName('test', 'name', 'ext', '#')).to.match(/^test#name\.ext$/);
      });
    });
  });
});
