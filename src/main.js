import { API_URL, HEADERS } from './config';
import { toJSON } from './utils';

export const search = (query, type) =>
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`, HEADERS)
    .then(toJSON)

export const searchArtists = (query) =>
  search(query, 'artist');

export const searchAlbums = (query) =>
  search(query, 'album');

export const searchTracks = (query) =>
  search(query, 'track');

export const searchPlaylists = (query) =>
  search(query, 'playlist');
