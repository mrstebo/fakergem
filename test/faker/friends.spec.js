import {expect} from 'chai';
import * as Friends from '../../lib/faker/friends';
import data from '../../data/friends.json';

describe('Friends', () => {
  describe('#character', () => {
    it('should return a character', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Friends.character()).to.be.oneOf(data['characters']);
      });
    });
  });

  describe('#location', () => {
    it('should return a location', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Friends.location()).to.be.oneOf(data['locations']);
      });
    });
  });

  describe('#quote', () => {
    it('should return a quote', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Friends.quote()).to.be.oneOf(data['quotes']);
      });
    });
  });
});
