import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists} from '../src/main';

//enable global fetch within our interface
global.fetch = require('node-fetch');

describe('Search', () => {
  let fetchedStub;
  let promise;

  beforeEach( () => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach( () => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });
    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });

  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {

     context("passing one type", () => {
        const artists = search('Madonna', 'artist');

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Madonna&type=artist');

        const albums = search('Madonna', 'album');
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Madonna&type=album');
      });

      context("passing more than one type", () => {
        const artistsAndAlbums = search('Madonna', ['artist', 'album']);

        expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Madonna&type=artist,album');
      });
    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({ 'body' : 'json' });
      const artists = search('Madonna', 'artist');

      expect(artists.resolveValue).to.be.eql({ 'body' : 'json' });
    });
  });

  describe('searchArtists', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Madonna');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artists = searchArtists('Madonna');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Madonna&type=artist');
    });

  });

  describe('searchAlbums', () => {
    it('should call fetch function', () => {
      const albums = searchAlbums('Madonna');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albums = searchAlbums('Madonna');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Madonna&type=album');
    });

  });

  describe('searchTracks', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Madonna');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const tracks = searchTracks('Madonna');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Madonna&type=track');

      const tracks2 = searchTracks('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });

  describe('searchPlaylists', () => {
    it('should call fetch function', () => {
      const playlists = searchPlaylists('Madonna');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const playlists = searchPlaylists('Madonna');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Madonna&type=playlist');

      const playlists2 = searchPlaylists('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });
});
