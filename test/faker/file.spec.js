'use strict';
const expect = require('chai').expect;
const File = require('../../src/faker/file');
const data = require('../../data/file.json');
const loremData = require('../../data/lorem.json');

describe('File', () => {
  describe('#extension', () => {
    it('should return a string', () => {
      expect(File.extension()).to.be.a('string');
    });

    it('should return an extension', () => {
      expect(File.extension()).to.be.oneOf(data['extensions']);
    });
  });

  describe('#mimeType', () => {
    it('should return a string', () => {
      expect(File.mimeType()).to.be.a('string');
    });

    it('should return an extension', () => {
      expect(File.mimeType()).to.be.oneOf(data['mimeTypes']);
    });
  });

  describe('#fileName', () => {
    it('should return a string', () => {
      expect(File.fileName()).to.be.a('string');
    });

    it('should return a filename', () => {
      expect(File.fileName()).to.match(/^([a-z]|\-)+\/\w+\.\w+$/);
    });

    it('should return a filename with specified directory', () => {
      expect(File.fileName('test')).to.match(/^test\/\w+\.\w+$/);
    });

    it('should return a filename with specified name', () => {
      expect(File.fileName('test', 'name')).to.match(/^test\/name\.\w+$/);
    });

    it('should return a filename with specified extension', () => {
      expect(File.fileName('test', 'name', 'ext')).to.match(/^test\/name\.ext$/);
    });

    it('should return a filename with specified directory separator', () => {
      expect(File.fileName('test', 'name', 'ext', '#')).to.match(/^test#name\.ext$/);
    });
  });
});
