'use strict';
const expect = require('chai').expect;
const File = require('../../src/faker/file');
const data = require('../../data/file.json');
const loremData = require('../../data/lorem.json');

describe('File', () => {
  describe('#extension', () => {
    it('should return an extension', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(File.extension()).to.be.oneOf(data['extensions']);
      });
    });
  });

  describe('#mimeType', () => {
    it('should return an extension', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(File.mimeType()).to.be.oneOf(data['mimeTypes']);
      });
    });
  });

  describe('#fileName', () => {
    it('should return a filename', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(File.fileName()).to.match(/^([a-z]|\-)+\/\w+\.\w+$/);
      });
    });

    it('should return a filename with specified directory', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(File.fileName('test')).to.match(/^test\/\w+\.\w+$/);
      });
    });

    it('should return a filename with specified name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(File.fileName('test', 'name')).to.match(/^test\/name\.\w+$/);
      });
    });

    it('should return a filename with specified extension', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(File.fileName('test', 'name', 'ext')).to.match(/^test\/name\.ext$/);
      });
    });

    it('should return a filename with specified directory separator', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(File.fileName('test', 'name', 'ext', '#')).to.match(/^test#name\.ext$/);
      });
    });
  });
});
