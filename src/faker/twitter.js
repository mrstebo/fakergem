/**
 *
 * @param {import('../faker').Faker} faker
 */
function Twitter(faker) {

  /**
   * @param {boolean} includeStatus
   * @param {boolean} includeEmail
   * @returns {Object}
   */
  this.user = function(includeStatus=true, includeEmail=false) {
    const userId = faker.Number.between(1, 9223372036854775807);
    const createdAt = faker.Date.between(new Date(2006, 2, 21), new Date());
    const backgroundImageUrl = faker.LoremPixel.image("600x400");
    const profileImageUrl = faker.Avatar.image(userId, "48x48");
    const user = {
      id: userId,
      id_str: `${userId}`,
      contributors_enabled: faker.Boolean.boolean(0.1),
      created_at: createdAt,
      default_profile_image: faker.Boolean.boolean(0.1),
      default_profile: faker.Boolean.boolean(0.1),
      description: faker.Lorem.sentence(),
      entities: this._userEntities(),
      favourites_count: faker.Number.between(1, 100000),
      follow_request_sent: false,
      followers_count: faker.Number.between(1, 10000000),
      following: false,
      friends_count: faker.Number.between(1, 100000),
      geo_enabled: faker.Boolean.boolean(0.1),
      is_translation_enabled: faker.Boolean.boolean(0.1),
      is_translator: faker.Boolean.boolean(0.1),
      lang: faker.Address.countryCode(),
      listed_count: faker.Number.between(1, 1000),
      location: `${faker.Address.city()}, ${faker.Address.stateAbbr()}, ${faker.Address.countryCode()}`,
      name: faker.Name.name(),
      notifications: false,
      profile_background_color: faker.Color.hexColor(),
      profile_background_image_url_https: backgroundImageUrl,
      profile_background_image_url: backgroundImageUrl.replace("https://", "http://"),
      profile_background_tile: faker.Boolean.boolean(0.1),
      profile_banner_url: faker.LoremPixel.image("1500x500"),
      profile_image_url_https: profileImageUrl,
      profile_image_url: profileImageUrl.replace("https://", "http://"),
      profile_link_color: faker.Color.hexColor(),
      profile_sidebar_border_color: faker.Color.hexColor(),
      profile_sidebar_fill_color: faker.Color.hexColor(),
      profile_text_color: faker.Color.hexColor(),
      profile_use_background_image: faker.Boolean.boolean(0.4),
      protected: faker.Boolean.boolean(0.1),
      screen_name: this.screenName(),
      statuses_count: faker.Number.between(1, 100000),
      time_zone: faker.Address.timeZone(),
      url: "http://example.com",
      utc_offset: this._utcOffset(),
      verified: faker.Boolean.boolean(0.1),
    };

    if (includeStatus) user["status"] = this.status(false);
    if (includeEmail) user["email"] = faker.Internet.safeEmail();

    return user;
  };

  /**
   * @param {boolean} includeUser
   * @param {boolean} includePhoto
   * @returns {Object}
   */
  this.status = function(includeUser=true, includePhoto=false) {
    const statusId = faker.Number.between(1, 9223372036854775807);
    const createdAt = faker.Date.between(new Date(2006, 2, 21), new Date());
    const status = {
      id: statusId,
      id_str: `${statusId}`,
      contributors: null,
      coordinates: null,
      created_at: createdAt,
      entities: this._statusEntities(includePhoto),
      favourite_count: faker.Number.between(1, 10000),
      favourited: false,
      geo: null,
      in_reply_to_screen_name: null,
      in_reply_to_status_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_user_id: null,
      is_quote_status: false,
      lang: faker.Address.countryCode(),
      nil: null,
      place: null,
      possibly_sensitive: faker.Boolean.boolean(0.1),
      retweet_count: faker.Number.between(1, 10000),
      retweeted_status:  null,
      retweeted: false,
      source: `<a href="${faker.Internet.url("example.com")}" rel="nofollow">${faker.Company.name}</a>`,
      text: faker.Lorem.sentence(),
      truncated: false,
    };

    if (includeUser) status["user"] = this.user(false);
    if (includePhoto) status["text"] = `${status["text"]} ${status["entities"]["media"][0]["url"]}`;

    return status;
  };

  /**
   * @returns {string}
   */
  this.screenName = function() {
    return faker.Internet.userName().substring(0, 20);
  };

  /**
   * @returns {number}
   */
  this._utcOffset = function() {
    return faker.Number.between(-43200, 50400);
  };

  /**
   * @returns {Object}
   */
  this._userEntities = function() {
    return {
      url:  {
        urls: [],
      },
      description:  {
        urls: [],
      },
    };
  };

  /**
   * @param {boolean} includePhoto
   * @returns {Object}
   */
  this._statusEntities = function(includePhoto) {
    const entities = {
      hashtags:  [],
      symbols:  [],
      user_mentions:  [],
      urls:  [],
    };

    if (includePhoto) entities["media"] = [this._photoEntity()];

    return entities;
  };

  /**
   * @returns {Object}
   */
  this._photoEntity = function() {
    const mediaUrl = faker.LoremPixel.image("1064x600");
    const mediaId = faker.Number.between(1, 9223372036854775807);
    return {
      id: mediaId,
      id_str: `${mediaId}`,
      indices:  [
        103,
        126,
      ],
      media_url: mediaUrl.sub("https://", "http://"),
      media_url_https: mediaUrl,
      url: faker.Internet.url("example.com"),
      display_url: "example.com",
      expanded_url: faker.Internet.url("example.com"),
      type: "photo",
      sizes:  {
        medium:  {
          w: 1064,
          h: 600,
          resize: "fit",
        },
        large:  {
          w: 1064,
          h: 600,
          resize: "fit",
        },
        small:  {
          w: 680,
          h: 383,
          resize: "fit",
        },
        thumb:  {
          w: 150,
          h: 150,
          resize: "crop",
        },
      },
    };
  };

}

module.exports = Twitter;
