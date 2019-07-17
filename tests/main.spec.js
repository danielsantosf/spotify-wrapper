import chai, { expect } from 'chai';

import SpotifyWrapper from '../src/index';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);



//enable global fetch within our interface
global.fetch = require('node-fetch');

describe('Search', () => {
  let spotify;

  let fetchedStub;
  let promise;

  beforeEach( () => {
    spotify = new SpotifyWrapper({token: 'foo'});

    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach( () => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist the spotify.search.albums method', () => {


      expect(spotify.search.albums).to.exist;
    });

    it('should exist the spotify.search.artists method', () => {


      expect(spotify.search.artists).to.exist;
    });

    it('should exist the spotify.search.tracks method', () => {

      expect(spotify.search.tracks).to.exist;
    });

    it('should exist the spotify.search.playlists method', () => {


      expect(spotify.search.playlists).to.exist;
    });

  });

  describe('spotify.search.artists', () => {
    it('should call fetch function', () => {


      const artists = spotify.search.artists('Madonna');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {


      const artists = spotify.search.artists('Madonna');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Madonna&type=artist');
    });

  });

  describe('spotify.search.albums', () => {
    it('should call fetch function', () => {


      const albums = spotify.search.albums('Madonna');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {


      const albums = spotify.search.albums('Madonna');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Madonna&type=album');
    });

  });

  describe('spotify.search.tracks', () => {
    it('should call fetch function', () => {


      const tracks = spotify.search.tracks('Madonna');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {


      const tracks = spotify.search.tracks('Madonna');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Madonna&type=track');

      const tracks2 = spotify.search.tracks('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });

  describe('spotify.search.playlists', () => {
    it('should call fetch function', () => {


      const playlists = spotify.search.playlists('Madonna');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {


      const playlists = spotify.search.playlists('Madonna');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Madonna&type=playlist');

      const playlists2 = spotify.search.playlists('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });
});
