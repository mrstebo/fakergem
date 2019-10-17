'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});
const data = require('../../data/color.json');

describe('Color', () => {
  describe('#hexColor', () => {
    it('should return a hex color value', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').withArgs(0, 0xffffff).returns(0xdefa12);
      expect(Faker.Color.hexColor()).to.eql('#defa12');
    }));
  });

  describe('#colorName', () => {
    it('should return a color name', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['colorNames']).returns('color');
      expect(Faker.Color.colorName()).to.eql('color');
    }));
  });

  describe('#rgbColor', () => {
    it('should return an RGB color', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').withArgs(0, 255).returns(100);
      expect(Faker.Color.rgbColor()).to.eql([100, 100, 100]);
    }));

    it('should return values between 0 and 255', () => {
      Faker.Color.rgbColor().forEach(c => {
        expect(c).to.be.within(0, 255);
      });
    });
  });

  describe('#hslColor', () => {
    it('should return a HSL color', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').withArgs(0, 360).returns(100);
      this.stub(Faker.Number, 'betweenF').withArgs(0.00, 1.00).returns(0.56);
      expect(Faker.Color.hslColor()).to.eql([100, 1, 1]);
    }));

    it('should return a hue value between 0 and 360', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Color.hslColor()[0]).to.be.within(0, 360);
      });
    });

    it('should return a saturation value between 0 and 1', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Color.hslColor()[1]).to.be.within(0, 1);
      });
    });

    it('should return a lightness value between 0 and 1', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Color.hslColor()[2]).to.be.within(0, 1);
      });
    });
  });

  describe('#hslaColor', () => {
    it('should return a HSLA color', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').withArgs(0, 360).returns(100);
      this.stub(Faker.Number, 'betweenF').withArgs(0.00, 1.00).returns(0.56);
      expect(Faker.Color.hslaColor()).to.eql([100, 1, 1, 0.56]);
    }));

    it('should return a hue value between 0 and 360', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Color.hslaColor()[0]).to.be.within(0, 360);
      });
    });

    it('should return a saturation value between 0 and 1', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Color.hslaColor()[1]).to.be.within(0, 1);
      });
    });

    it('should return a lightness value between 0 and 1', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Color.hslaColor()[2]).to.be.within(0, 1);
      });
    });

    it('should return an alpha value between 0 and 1', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Color.hslaColor()[3]).to.be.within(0, 1);
      });
    });
  });
});
