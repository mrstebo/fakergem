import {expect} from 'chai';
import * as Color from '../../lib/faker/color';

describe('Color', () => {
  describe('#hexColor', () => {
    it('should return a hex color value', () => {
      [...Array(10).keys()].forEach(_ => {
        expect(Color.hexColor()).to.match(/^#[0-9a-f]{6}/);
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
});
