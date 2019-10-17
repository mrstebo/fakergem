'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../data/slack-emoji.json';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});

describe('SlackEmoji', () => {
  describe('#people', () => {
    it('should return an emoji from the people category', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['people']).returns('person');
      expect(Faker.SlackEmoji.people()).to.eql('person');
    }));
  });

  describe('#nature', () => {
    it('should return an emoji from the nature category', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['nature']).returns('nature');
      expect(Faker.SlackEmoji.nature()).to.eql('nature');
    }));
  });

  describe('#foodAndDrink', () => {
    it('should return an emoji from the food and drink category', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['foodAndDrink']).returns('food and drink');
      expect(Faker.SlackEmoji.foodAndDrink()).to.eql('food and drink');
    }));
  });

  describe('#celebration', () => {
    it('should return an emoji from the celebration category', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['celebration']).returns('celebration');
      expect(Faker.SlackEmoji.celebration()).to.eql('celebration');
    }));
  });

  describe('#activity', () => {
    it('should return an emoji from the activity category', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['activity']).returns('activity');
      expect(Faker.SlackEmoji.activity()).to.eql('activity');
    }));
  });

  describe('#travelAndPlaces', () => {
    it('should return an emoji from the travel and places category', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['travelAndPlaces']).returns('travel and places');
      expect(Faker.SlackEmoji.travelAndPlaces()).to.eql('travel and places');
    }));
  });

  describe('#objectsAndSymbols', () => {
    it('should return an emoji from the objects and symbols category', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['objectsAndSymbols']).returns('person');
      expect(Faker.SlackEmoji.objectsAndSymbols()).to.eql('person');
    }));
  });

  describe('#custom', () => {
    it('should return an emoji from the custom category', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['custom']).returns('custom');
      expect(Faker.SlackEmoji.custom()).to.eql('custom');
    }));
  });

  describe('#emoji', () => {
    it('should return an emoji from any category', sinonTest(function(this: typeof sinon) {
      const emojis = [
        ...data['people'],
        ...data['nature'],
        ...data['foodAndDrink'],
        ...data['celebration'],
        ...data['activity'],
        ...data['travelAndPlaces'],
        ...data['objectsAndSymbols'],
        ...data['custom']
      ];
      this.stub(Faker.Random, 'element').withArgs(emojis).returns('emoji');
      expect(Faker.SlackEmoji.emoji()).to.eql('emoji');
    }));
  });
});
