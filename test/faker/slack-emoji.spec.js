'use strict';
const expect = require('chai').expect;
const SlackEmoji = require('../../src/faker/slack-emoji');
const data = require('../../data/slack-emoji.json');

describe('SlackEmoji', () => {
  describe('#people', () => {
    it('should return a string', () => {
      expect(SlackEmoji.people()).to.be.a('string');
    });

    it('should return an emoji from the people category', () => {
      expect(SlackEmoji.people()).to.be.oneOf(data['people']);
    });
  });

  describe('#nature', () => {
    it('should return a string', () => {
      expect(SlackEmoji.nature()).to.be.a('string');
    });

    it('should return an emoji from the nature category', () => {
      expect(SlackEmoji.nature()).to.be.oneOf(data['nature']);
    });
  });

  describe('#foodAndDrink', () => {
    it('should return a string', () => {
      expect(SlackEmoji.foodAndDrink()).to.be.a('string');
    });

    it('should return an emoji from the food and drink category', () => {
      expect(SlackEmoji.foodAndDrink()).to.be.oneOf(data['foodAndDrink']);
    });
  });

  describe('#celebration', () => {
    it('should return a string', () => {
      expect(SlackEmoji.celebration()).to.be.a('string');
    });

    it('should return an emoji from the celebration category', () => {
      expect(SlackEmoji.celebration()).to.be.oneOf(data['celebration']);
    });
  });

  describe('#activity', () => {
    it('should return a string', () => {
      expect(SlackEmoji.activity()).to.be.a('string');
    });

    it('should return an emoji from the activity category', () => {
      expect(SlackEmoji.activity()).to.be.oneOf(data['activity']);
    });
  });

  describe('#travelAndPlaces', () => {
    it('should return a string', () => {
      expect(SlackEmoji.travelAndPlaces()).to.be.a('string');
    });

    it('should return an emoji from the travel and places category', () => {
      expect(SlackEmoji.travelAndPlaces()).to.be.oneOf(data['travelAndPlaces']);
    });
  });

  describe('#objectsAndSymbols', () => {
    it('should return a string', () => {
      expect(SlackEmoji.objectsAndSymbols()).to.be.a('string');
    });

    it('should return an emoji from the objects and symbols category', () => {
      expect(SlackEmoji.objectsAndSymbols()).to.be.oneOf(data['objectsAndSymbols']);
    });
  });

  describe('#custom', () => {
    it('should return a string', () => {
      expect(SlackEmoji.custom()).to.be.a('string');
    });

    it('should return an emoji from the custom category', () => {
      expect(SlackEmoji.custom()).to.be.oneOf(data['custom']);
    });
  });

  describe('#emoji', () => {
    it('should return a string', () => {
      expect(SlackEmoji.emoji()).to.be.a('string');
    });

    it('should return an emoji from any category', () => {
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
      expect(SlackEmoji.emoji()).to.be.oneOf(emojis);
    });
  });
});
