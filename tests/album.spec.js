import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('Album', () => {
  let spotify;

  let stubbedFetch;
  let promise;

  beforeEach( () => {
    spotify = new SpotifyWrapper({token: 'foo'});

    stubbedFetch = sinon.stub(global, 'fetch');
    promise = stubbedFetch.returnsPromise();
  });

  afterEach( () => {
    stubbedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should have spotify.album.getAlbum method', () => {


      expect(spotify.album.getAlbum).to.exist;
    });

    it('should have spotify.album.getAlbums method', () => {


      expect(spotify.album.getAlbums).to.exist;
    });

    it('should have spotify.album.getTracks method', () => {


      expect(spotify.album.getTracks).to.exist;
    });

  });

  describe('getAlbum', () => {

    // verifies that fetch occurs
    it('should call fetch once', () => {


      const album = spotify.album.getAlbum();

      expect(stubbedFetch)
      .to.have.been.calledOnce;
    });


    // verifies that fetch occurs with desired url
    //'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy'

    it('should call fetch with the correct url', () => {


      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy')

      const album2 = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTs');
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTs')

    });

    // verifies that the data has been received by Promise
    it('should return the correct data from Promise', () => {


      promise.resolves({ album : 'name'});
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(album.resolveValue).to.be.eql({ album : 'name'});
    });

  });

  describe('spotify.album.getAlbums', () => {
     it('should call fetch method at least once', () => {


      const albums = spotify.album.getAlbums();
      expect(stubbedFetch).to.have.been.calledOnce;
      });

     it('should call fetch with the correct url', () => {


      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTs']);
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTs');
      });

     it('should return correct data from Promise', () => {


      promise.resolves({ album: 'name'});
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTs']);
      expect(albums.resolveValue).to.be.eql({ album: 'name'});
      });
  });

  describe('spotify.album.getTracks', () => {
     it('should call fetch method at least once', () => {


      const tracks = spotify.album.getTracks();
      expect(stubbedFetch).to.have.been.calledOnce;
      });

     it('should call fetch with the correct url', () => {


      const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
      });

     it('should return correct data from Promise', () => {


      promise.resolves({ album: 'name'});
      const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(tracks.resolveValue).to.be.eql({ album: 'name'});
      });
  });
});
