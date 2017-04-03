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
});
