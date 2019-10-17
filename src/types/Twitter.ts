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
