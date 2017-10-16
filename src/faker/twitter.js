import * as Address from './address';
import * as Avatar from './avatar';
import * as Boolean from './boolean';
import * as Color from './color';
import * as Company from './company';
import * as DateFaker from './date';
import * as Internet from './internet';
import * as Lorem from './lorem';
import * as LoremPixel from './lorem-pixel';
import * as Name from './name';
import * as Number from './number';

export class Twitter {
  constructor(fakers) {
    this._fakers = fakers;
  }

  user(includeStatus=true, includeEmail=false) {
    const userId = this._fakers.Number.between(1, 9223372036854775807);
    const createdAt = this._fakers.DateFaker.between(new Date(2006, 2, 21), new Date());
    const backgroundImageUrl = this._fakers.LoremPixel.image('600x400');
    const profileImageUrl = this._fakers.Avatar.image(userId, '48x48');
    const user = {
      id: userId,
      id_str: `${userId}`,
      contributors_enabled: this._fakers.Boolean.boolean(0.1),
      created_at: createdAt,
      default_profile_image: this._fakers.Boolean.boolean(0.1),
      default_profile: this._fakers.Boolean.boolean(0.1),
      description: this._fakers.Lorem.sentence(),
      entities: this._userEntities(),
      favourites_count: this._fakers.Number.between(1, 100000),
      follow_request_sent: false,
      followers_count: this._fakers.Number.between(1, 10000000),
      following: false,
      friends_count: this._fakers.Number.between(1, 100000),
      geo_enabled: this._fakers.Boolean.boolean(0.1),
      is_translation_enabled: this._fakers.Boolean.boolean(0.1),
      is_translator: this._fakers.Boolean.boolean(0.1),
      lang: this._fakers.Address.countryCode(),
      listed_count: this._fakers.Number.between(1, 1000),
      location: `${this._fakers.Address.city()}, ${this._fakers.Address.stateAbbr()}, ${this._fakers.Address.countryCode()}`,
      name: this._fakers.Name.name(),
      notifications: false,
      profile_background_color: this._fakers.Color.hexColor(),
      profile_background_image_url_https: backgroundImageUrl,
      profile_background_image_url: backgroundImageUrl.replace('https://', 'http://'),
      profile_background_tile: this._fakers.Boolean.boolean(0.1),
      profile_banner_url: this._fakers.LoremPixel.image('1500x500'),
      profile_image_url_https: profileImageUrl,
      profile_image_url: profileImageUrl.replace('https://', 'http://'),
      profile_link_color: this._fakers.Color.hexColor(),
      profile_sidebar_border_color: this._fakers.Color.hexColor(),
      profile_sidebar_fill_color: this._fakers.Color.hexColor(),
      profile_text_color: this._fakers.Color.hexColor(),
      profile_use_background_image: this._fakers.Boolean.boolean(0.4),
      protected: this._fakers.Boolean.boolean(0.1),
      screen_name: this.screenName(),
      statuses_count: this._fakers.Number.between(1, 100000),
      time_zone: this._fakers.Address.timeZone(),
      url: 'http://example.com',
      utc_offset: this._utcOffset(),
      verified: this._fakers.Boolean.boolean(0.1)
    };

    if (includeStatus) user['status'] = this.status(false);
    if (includeEmail) user['email'] = this._fakers.Internet.safeEmail();

    return user;
  }

  status(includeUser=true, includePhoto=false) {
    const statusId = this._fakers.Number.between(1, 9223372036854775807);
    const createdAt = this._fakers.DateFaker.between(new Date(2006, 2, 21), new Date());
    const status = {
      id: statusId,
      id_str: `${statusId}`,
      contributors: null,
      coordinates: null,
      created_at: createdAt,
      entities: this._statusEntities(includePhoto),
      favourite_count: this._fakers.Number.between(1, 10000),
      favourited: false,
      geo: null,
      in_reply_to_screen_name: null,
      in_reply_to_status_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_user_id: null,
      is_quote_status: false,
      lang: this._fakers.Address.countryCode(),
      nil: null,
      place: null,
      possibly_sensitive: this._fakers.Boolean.boolean(0.1),
      retweet_count: this._fakers.Number.between(1, 10000),
      retweeted_status:  null,
      retweeted: false,
      source: `<a href=\"${this._fakers.Internet.url('example.com')}\" rel=\"nofollow\">${this._fakers.Company.name}</a>`,
      text: this._fakers.Lorem.sentence,
      truncated: false
    };

    if (includeUser) status['user'] = this.user(false);
    if (includePhoto) status['text'] = `${status['text']} ${status['entities']['media'][0]['url']}`;

    return status;
  }

  screenName() {
    return [
      this._fakers.Name.firstName(),
      this._fakers.Name.lastName()
    ].join('_').substring(0, 20).toLowerCase();
  }

  _utcOffset() {
    return this._fakers.Number.between(-43200, 50400);
  }

  _userEntities() {
    return [];
  }

  _statusEntities(includePhoto) {
    return [];
  }
}

export default new Twitter({
  Address,
  Avatar,
  Boolean,
  Color,
  Company,
  DateFaker,
  Internet,
  Lorem,
  LoremPixel,
  Name,
  Number
});
