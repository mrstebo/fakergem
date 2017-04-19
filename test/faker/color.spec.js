'use strict';
const expect = require('chai').expect;
const Color = require('../../src/faker/color');
const data = require('../../data/color.json');

describe('Color', () => {
  describe('#hexColor', () => {
    it('should return a hex color value', () => {
      [...Array(10).keys()].forEach(_ => {
        expect(Color.hexColor()).to.match(/^#[0-9a-f]{6}/);
      });
    });
  });

  describe('#colorName', () => {
    it('should return a color name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Color.colorName()).to.be.oneOf(data['colorNames']);
      });
    });
  });

  describe('#rgbColor', () => {
    it('should return an array of 3 values', () => {
      expect(Color.rgbColor()).to.have.lengthOf(3);
    });

    it('should return values between 0 and 255', () => {
      let color = Color.rgbColor();
      [0, 1, 2].forEach(i => {
        expect(color[i]).to.be.within(0, 255);
      });
    });
  });

  describe('#hslColor', () => {
    it('should return an array of 3 values', () => {
      expect(Color.hslColor()).to.have.lengthOf(3);
    });

    it('should return a hue value between 0 and 360', () => {
      expect(Color.hslColor()[0]).to.be.within(0, 360);
    });

    it('should return a saturation value between 0 and 1', () => {
      expect(Color.hslColor()[1]).to.be.within(0, 1);
    });

    it('should return a lightness value between 0 and 1', () => {
      expect(Color.hslColor()[2]).to.be.within(0, 1);
    });
  });

  describe('#hslaColor', () => {
    it('should return an array of 4 values', () => {
      expect(Color.hslaColor()).to.have.lengthOf(4);
    });

    it('should return a hue value between 0 and 360', () => {
      expect(Color.hslaColor()[0]).to.be.within(0, 360);
    });

    it('should return a saturation value between 0 and 1', () => {
      expect(Color.hslaColor()[1]).to.be.within(0, 1);
    });

    it('should return a lightness value between 0 and 1', () => {
      expect(Color.hslaColor()[2]).to.be.within(0, 1);
    });

    it('should return an alpha value between 0 and 1', () => {
      expect(Color.hslaColor()[3]).to.be.within(0, 1);
    });
  });
});
