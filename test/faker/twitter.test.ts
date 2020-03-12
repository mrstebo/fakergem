'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Twitter', () => {
  describe('#user', () => {
    it('should have the properties for a user object', () => {
      expect(Faker.Twitter.user()).to.have.all.keys([
        'id',
        'id_str',
        'contributors_enabled',
        'created_at',
        'default_profile_image',
        'default_profile',
        'description',
        'email',
        'entities',
        'favourites_count',
        'follow_request_sent',
        'followers_count',
        'following',
        'friends_count',
        'geo_enabled',
        'is_translation_enabled',
        'is_translator',
        'lang',
        'listed_count',
        'location',
        'name',
        'notifications',
        'profile_background_color',
        'profile_background_image_url_https',
        'profile_background_image_url',
        'profile_background_tile',
        'profile_banner_url',
        'profile_image_url_https',
        'profile_image_url',
        'profile_link_color',
        'profile_sidebar_border_color',
        'profile_sidebar_fill_color',
        'profile_text_color',
        'profile_use_background_image',
        'protected',
        'screen_name',
        'status',
        'statuses_count',
        'time_zone',
        'url',
        'utc_offset',
        'verified'
      ]);
    });

    it('should not have status when includeStatus is false', () => {
      expect(Faker.Twitter.user(false)).to.not.have.all.keys('status');
    });

    it('should have email when includeEmail is true', () => {
      expect(Faker.Twitter.user(true, true)).to.have.any.keys('email');
    });
  });

  describe('#status', () => {
    it('should have the properties for a status object', () => {
      expect(Faker.Twitter.status()).to.have.all.keys([
        'id',
        'id_str',
        'contributors',
        'coordinates',
        'created_at',
        'entities',
        'favourite_count',
        'favourited',
        'geo',
        'in_reply_to_screen_name',
        'in_reply_to_status_id',
        'in_reply_to_user_id_str',
        'in_reply_to_user_id',
        'is_quote_status',
        'lang',
        'nil',
        'place',
        'possibly_sensitive',
        'retweet_count',
        'retweeted_status',
        'retweeted',
        'source',
        'text',
        'truncated',
        'user'
      ]);
    });

    it('should not have user when includeUser is false', () => {
      expect(Faker.Twitter.status(false)).to.not.have.all.keys('user');
    });

    it('should have a media entry when includePhoto is true', () => {
      const status = Faker.Twitter.status(true, true);
      expect(status.entities.media).to.have.lengthOf(1);
    });

    it('should have url in text when includePhoto is true', test(function(this: typeof sinon) {
      this.stub(Faker.Lorem, 'sentence').returns('test');
      this.stub(Faker.Internet, 'url').returns('http://test.com/image.png');
      expect(Faker.Twitter.status(true, true).text).to.equal('test http://test.com/image.png');
    }));
  });

  describe('#screenName', () => {
    it('should contain an internet username', test(function(this: typeof sinon) {
      this.stub(Faker.Internet, 'userName').returns('test_user');
      expect(Faker.Twitter.screenName()).to.equal('test_user');
    }));

    it('should not be longer than 20 characters', test(function(this: typeof sinon) {
      this.stub(Faker.Internet, 'userName').returns('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
      expect(Faker.Twitter.screenName()).to.have.lengthOf(20);
    }));
  });
});
