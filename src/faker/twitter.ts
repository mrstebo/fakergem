import { Faker } from '../faker';

export class Twitter {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  user(includeStatus: boolean = true, includeEmail: boolean = false): TwitterUser {
    const userId = this.faker.Number.between(1, 9223372036854775807);
    const createdAt = this.faker.Date.between(new Date(2006, 2, 21), new Date());
    const backgroundImageUrl = this.faker.LoremPixel.image('600x400');
    const profileImageUrl = this.faker.Avatar.image(userId.toString(), '48x48');
    const user = {
      id: userId,
      id_str: `${userId}`,
      contributors_enabled: this.faker.Boolean.boolean(0.1),
      created_at: createdAt,
      default_profile_image: this.faker.Boolean.boolean(0.1),
      default_profile: this.faker.Boolean.boolean(0.1),
      description: this.faker.Lorem.sentence(),
      email: includeEmail ? this.faker.Internet.safeEmail() : undefined,
      entities: this.userEntities(),
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
      profile_background_image_url: backgroundImageUrl.replace('https://', 'http://'),
      profile_background_tile: this.faker.Boolean.boolean(0.1),
      profile_banner_url: this.faker.LoremPixel.image('1500x500'),
      profile_image_url_https: profileImageUrl,
      profile_image_url: profileImageUrl.replace('https://', 'http://'),
      profile_link_color: this.faker.Color.hexColor(),
      profile_sidebar_border_color: this.faker.Color.hexColor(),
      profile_sidebar_fill_color: this.faker.Color.hexColor(),
      profile_text_color: this.faker.Color.hexColor(),
      profile_use_background_image: this.faker.Boolean.boolean(0.4),
      protected: this.faker.Boolean.boolean(0.1),
      screen_name: this.screenName(),
      status: includeStatus ? this.status(false) : undefined,
      statuses_count: this.faker.Number.between(1, 100000),
      time_zone: this.faker.Address.timeZone(),
      url: 'http://example.com',
      utc_offset: this.utcOffset(),
      verified: this.faker.Boolean.boolean(0.1),
    };

    return user;
  }

  status(includeUser: boolean = true, includePhoto: boolean = false): TwitterStatus {
    const statusId = this.faker.Number.between(1, 9223372036854775807);
    const createdAt = this.faker.Date.between(new Date(2006, 2, 21), new Date());
    const status = {
      id: statusId,
      id_str: `${statusId}`,
      contributors: null,
      coordinates: null,
      created_at: createdAt,
      entities: this.statusEntities(includePhoto),
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
      retweeted_status: null,
      retweeted: false,
      source: `<a href=\"${this.faker.Internet.url('example.com')}\" rel=\"nofollow\">${this.faker.Company.name}</a>`,
      text: this.faker.Lorem.sentence(),
      truncated: false,
      user: includeUser ? this.user(false) : undefined,
    };

    if (includePhoto) status.text = `${status['text']} ${status.entities.media[0]['url']}`;

    return status;
  }

  screenName(): string {
    return this.faker.Internet.userName().substring(0, 20);
  }

  private utcOffset(): number {
    return this.faker.Number.between(-43200, 50400);
  }

  private userEntities(): TwitterUserEntities {
    return {
      url: {
        urls: [],
      },
      description: {
        urls: [],
      },
    };
  }

  private statusEntities(includePhoto: boolean): TwitterStatusEntities {
    return {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: [],
      media: includePhoto ? [this.photoEntity()] : [],
    };
  }

  private photoEntity(): TwitterPhotoEntity {
    const mediaUrl = this.faker.LoremPixel.image('1064x600');
    const mediaId = this.faker.Number.between(1, 9223372036854775807);
    return {
      id: mediaId,
      id_str: `${mediaId}`,
      indices: [103, 126],
      media_url: mediaUrl.replace('https://', 'http://'),
      media_url_https: mediaUrl,
      url: this.faker.Internet.url('example.com'),
      display_url: 'example.com',
      expanded_url: this.faker.Internet.url('example.com'),
      type: 'photo',
      sizes: {
        medium: {
          w: 1064,
          h: 600,
          resize: 'fit',
        },
        large: {
          w: 1064,
          h: 600,
          resize: 'fit',
        },
        small: {
          w: 680,
          h: 383,
          resize: 'fit',
        },
        thumb: {
          w: 150,
          h: 150,
          resize: 'crop',
        },
      },
    };
  }
}

export interface TwitterUser {
  id: number;
  id_str: string;
  contributors_enabled: boolean;
  created_at: Date;
  default_profile_image: boolean;
  default_profile: boolean;
  description: string;
  email: string | undefined;
  entities: TwitterUserEntities;
  favourites_count: number;
  follow_request_sent: boolean;
  followers_count: number;
  following: boolean;
  friends_count: number;
  geo_enabled: boolean;
  is_translation_enabled: boolean;
  is_translator: boolean;
  lang: string;
  listed_count: number;
  location: string;
  name: string;
  notifications: boolean;
  profile_background_color: string;
  profile_background_image_url_https: string;
  profile_background_image_url: string;
  profile_background_tile: boolean;
  profile_banner_url: string;
  profile_image_url_https: string;
  profile_image_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  protected: boolean;
  screen_name: string;
  status: TwitterStatus | undefined;
  statuses_count: number;
  time_zone: string;
  url: string;
  utc_offset: number;
  verified: boolean;
}

export interface TwitterUserEntities {
  url: TwitterUrls;
  description: TwitterUrls;
}

export interface TwitterUrls {
  urls: Array<string>;
}

export interface TwitterStatus {
  id: number;
  id_str: string;
  contributors: null;
  coordinates: null;
  created_at: Date;
  entities: TwitterStatusEntities;
  favourite_count: number;
  favourited: boolean;
  geo: null;
  in_reply_to_screen_name: null;
  in_reply_to_status_id: null;
  in_reply_to_user_id_str: null;
  in_reply_to_user_id: null;
  is_quote_status: boolean;
  lang: string;
  nil: null;
  place: null;
  possibly_sensitive: boolean;
  retweet_count: number;
  retweeted_status: null;
  retweeted: boolean;
  source: string;
  text: string;
  truncated: boolean;
  user: TwitterUser | undefined;
}

export interface TwitterStatusEntities {
  hashtags: Array<string>;
  symbols: Array<string>;
  user_mentions: Array<string>;
  urls: Array<string>;
  media: Array<TwitterPhotoEntity>;
}

export interface TwitterPhotoEntity {
  id: number;
  id_str: string;
  indices: [number, number];
  media_url: string;
  media_url_https: string;
  url: string;
  display_url: string;
  expanded_url: string;
  type: string;
  sizes: { [key: string]: TwitterPhotoEntitySize };
}

export interface TwitterPhotoEntitySize {
  w: number;
  h: number;
  resize: string;
}
