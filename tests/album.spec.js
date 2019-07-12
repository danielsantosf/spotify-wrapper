//getAlbum
//getAlbums
//getAlbumtracks

import chai, { expect } from 'chai';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let stubbedFetch;
  let promise;

  beforeEach( () => {
    stubbedFetch = sinon.stub(global, 'fetch');
    promise = stubbedFetch.returnsPromise();
  });

  afterEach( () => {
    stubbedFetch.restore();
  });

  describe('smoke tests', () => {

    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });

  });

  describe('getAlbum', () => {
    // verifies that fetch occurs

    const album = getAlbum();

    it.skip('should call fetch once', () => {
      expect(stubbedFetch)
      .to.have.been.calledOnce;
    });


    // verifies that fetch occurs with desired url
    //'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy'

    it('should call fetch with the correct url', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy')

      const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTs');
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTs')

    });

    // verifies that the data has been received by Promise
    it('should return the correct data from Promise', () => {
      promise.resolves({ album : 'name'});
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(album.resolveValue).to.be.eql({ album : 'name'});
    });

  });

  describe('getAlbums', () => {
     it('should call fetch method at least once', () => {
      const albums = getAlbums();
      expect(stubbedFetch).to.have.been.calledOnce;
      });

     it('should call fetch with the correct url', () => {
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTs']);
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTs');
      });

     it('should return correct data from Promise', () => {
      promise.resolves({ album: 'name'});
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTs']);
      expect(albums.resolveValue).to.be.eql({ album: 'name'});
      });
  });

  describe('getAlbumTracks', () => {
     it('should call fetch method at least once', () => {
      const tracks = getAlbumTracks();
      expect(stubbedFetch).to.have.been.calledOnce;
      });

     it('should call fetch with the correct url', () => {
      const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
      });

     it('should return correct data from Promise', () => {
      promise.resolves({ album: 'name'});
      const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(tracks.resolveValue).to.be.eql({ album: 'name'});
      });
  });
});
