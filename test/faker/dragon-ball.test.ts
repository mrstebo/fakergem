'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/dragon-ball.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('DragonBall', () => {
  describe('#character', () => {
    it('should return a character', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['characters']).returns('character');
      expect(Faker.DragonBall.character()).to.eql('character');
    }));
  });
});
