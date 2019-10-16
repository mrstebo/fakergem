module.exports = class Twitter {
  constructor(faker) {
    this.faker = faker;
  }

  user(includeStatus=true, includeEmail=false) {
    const userId = this.faker.Number.between(1, 9223372036854775807);
    const createdAt = this.faker.Date.between(new Date(2006, 2, 21), new Date());
    const backgroundImageUrl = this.faker.LoremPixel.image("600x400");
    const profileImageUrl = this.faker.Avatar.image(userId, "48x48");
    const user = {
      id: userId,
      id_str: `${userId}`,
      contributors_enabled: this.faker.Boolean.boolean(0.1),
      created_at: createdAt,
      default_profile_image: this.faker.Boolean.boolean(0.1),
      default_profile: this.faker.Boolean.boolean(0.1),
      description: this.faker.Lorem.sentence(),
      entities: this._userEntities(),
      favourites_count: this.faker.Number.between(1, 100000),
      follow_request_sent: false,
      followers_count: this.faker.Number.between(1, 10000000),
      following: false,
      friends_count: this.faker.Number.between(1, 100000),
      geo_enabled: this.faker.Boolean.boolean(0.1),
      is_translation_enabled: this.faker.Boolean.boolean(0.1),
      is_translator: this.faker.Boolean.boolean(0.1),
      lang: this.faker.Address.countryCode(),
      listed_count: this.faker.Number.between(1, 1000),
      location: `${this.faker.Address.city()}, ${this.faker.Address.stateAbbr()}, ${this.faker.Address.countryCode()}`,
      name: this.faker.Name.name(),
      notifications: false,
      profile_background_color: this.faker.Color.hexColor(),
      profile_background_image_url_https: backgroundImageUrl,
      profile_background_image_url: backgroundImageUrl.replace("https://", "http://"),
      profile_background_tile: this.faker.Boolean.boolean(0.1),
      profile_banner_url: this.faker.LoremPixel.image("1500x500"),
      profile_image_url_https: profileImageUrl,
      profile_image_url: profileImageUrl.replace("https://", "http://"),
      profile_link_color: this.faker.Color.hexColor(),
      profile_sidebar_border_color: this.faker.Color.hexColor(),
      profile_sidebar_fill_color: this.faker.Color.hexColor(),
      profile_text_color: this.faker.Color.hexColor(),
      profile_use_background_image: this.faker.Boolean.boolean(0.4),
      protected: this.faker.Boolean.boolean(0.1),
      screen_name: this.screenName(),
      statuses_count: this.faker.Number.between(1, 100000),
      time_zone: this.faker.Address.timeZone(),
      url: "http://example.com",
      utc_offset: this._utcOffset(),
      verified: this.faker.Boolean.boolean(0.1),
    };

    if (includeStatus) user["status"] = this.status(false);
    if (includeEmail) user["email"] = this.faker.Internet.safeEmail();

    return user;
  }

  status(includeUser=true, includePhoto=false) {
    const statusId = this.faker.Number.between(1, 9223372036854775807);
    const createdAt = this.faker.Date.between(new Date(2006, 2, 21), new Date());
    const status = {
      id: statusId,
      id_str: `${statusId}`,
      contributors: null,
      coordinates: null,
      created_at: createdAt,
      entities: this._statusEntities(includePhoto),
      favourite_count: this.faker.Number.between(1, 10000),
      favourited: false,
      geo: null,
      in_reply_to_screen_name: null,
      in_reply_to_status_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_user_id: null,
      is_quote_status: false,
      lang: this.faker.Address.countryCode(),
      nil: null,
      place: null,
      possibly_sensitive: this.faker.Boolean.boolean(0.1),
      retweet_count: this.faker.Number.between(1, 10000),
      retweeted_status:  null,
      retweeted: false,
      source: `<a href="${this.faker.Internet.url("example.com")}" rel="nofollow">${this.faker.Company.name}</a>`,
      text: this.faker.Lorem.sentence(),
      truncated: false,
    };

    if (includeUser) status["user"] = this.user(false);
    if (includePhoto) status["text"] = `${status["text"]} ${status["entities"]["media"][0]["url"]}`;

    return status;
  }

  screenName() {
    return this.faker.Internet.userName().substring(0, 20);
  }

  _utcOffset() {
    return this.faker.Number.between(-43200, 50400);
  }

  _userEntities() {
    return {
      url:  {
        urls: [],
      },
      description:  {
        urls: [],
      },
    };
  }

  _statusEntities(includePhoto) {
    const entities = {
      hashtags:  [],
      symbols:  [],
      user_mentions:  [],
      urls:  [],
    };

    if (includePhoto) entities["media"] = [this._photoEntity()];

    return entities;
  }

  _photoEntity() {
    const mediaUrl = this.faker.LoremPixel.image("1064x600");
    const mediaId = this.faker.Number.between(1, 9223372036854775807);
    return {
      id: mediaId,
      id_str: `${mediaId}`,
      indices:  [
        103,
        126,
      ],
      media_url: mediaUrl.sub("https://", "http://"),
      media_url_https: mediaUrl,
      url: this.faker.Internet.url("example.com"),
      display_url: "example.com",
      expanded_url: this.faker.Internet.url("example.com"),
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
  }
};
