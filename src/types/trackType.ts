import {albumsItems, artists} from './albumType';

export interface trackType {
  id: string,
  name: string,
  artists: string,
  playUrl: string | null,
}

export interface tracksJsonType {
  tracks: {
    href: string,
    items: trackItems[],
    limit: number,
    next: string,
    offset: number,
    previous: string | null,
    total: number
  }
}

interface trackItems {
  album: albumsItems,
  artists: artists[],
  avaiable_markets: string[],
  disc_number: number,
  duration_ms: number,
  explicit: boolean,
  external_ids: {[key: string]: string},
  external_urls: {[key: string]: string}
  href: string,
  id: string,
  is_local: boolean,
  name: string,
  popularity: number,
  preview_url: string | null,
  track_number: number,
  type: string,
  uri: string
}