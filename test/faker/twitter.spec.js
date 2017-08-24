'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Twitter = require('../../src/faker/twitter').default;

describe('Twitter', () => {
  describe('#user', () => {
    it('should have the properties for a user object', () => {
      const user = Twitter.user()
      expect(user).to.have.keys([
        'id',
        'id_str',
        'contributors_enabled',
        'created_at',
        'default_profile_image',
        'default_profile',
        'description',
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
        'statuses_count',
        'time_zone',
        'url',
        'utc_offset',
        'verified'
      ]);
    });
  });

  describe('#status', () => {

  });

  describe('#screenName', () => {
    it('should contain a screen name separated by an underscore', sinonTest(function() {
      this.stub(Twitter._fakers.Name, 'firstName').callsFake(() => 'test');
      this.stub(Twitter._fakers.Name, 'lastName').callsFake(() => 'user');
      expect(Twitter.screenName()).to.equal('test_user');
    }));

    it('should convert name to lowercase', sinonTest(function() {
      this.stub(Twitter._fakers.Name, 'firstName').callsFake(() => 'Test');
      this.stub(Twitter._fakers.Name, 'lastName').callsFake(() => 'User');
      expect(Twitter.screenName()).to.equal('test_user');
    }));

    it('should not be longer than 20 characters', sinonTest(function() {
      this.stub(Twitter._fakers.Name, 'firstName').callsFake(() => 'XXXXXXXXXXXXXXX');
      this.stub(Twitter._fakers.Name, 'lastName').callsFake(() => 'XXXXXXXXXXXXXXX');
      expect(Twitter.screenName()).to.have.lengthOf(20);
    }));
  });
});
