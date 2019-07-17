import chai, {expect} from 'chai';

import SpotifyWrapper from '../src/index';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');


describe('SpotifyWrapper Libary', function () {
  it('should create an instance of SpotifyWrapper', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    let spotify = new SpotifyWrapper({
      apiURL: 'yaddayadda'
    });

    expect(spotify.apiURL).to.be.equal('yaddayadda');
  });

  it('should use the default apiURL if not provided', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  })

  it('should receive token as an option', () => {
    let spotify = new SpotifyWrapper({
      token: 'foo'
    });

    expect(spotify.token).to.be.equal('foo');
  });

  describe('request method', () => {
    let stubbedFetch;
    let promise;

    beforeEach( () => {
      stubbedFetch = sinon.stub(global, 'fetch');
      promise = stubbedFetch.returnsPromise();
    });

    afterEach( () => {
      stubbedFetch.restore();
    });

    it('should have request method', () => {
      let spotify = new SpotifyWrapper({});

      expect(spotify.request).to.exist;
    });

    it('should call fetch when request is made', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      spotify.request('url');
      expect(stubbedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the right url passed', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      spotify.request('url');
      expect(stubbedFetch).to.have.been.calledWith('url');
    });

    it('should call fetch with the right headers passed', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      const headers = {
        headers: {
          Authorization: `'Bearer foo'`,
        },
      };

      spotify.request('url');
      expect(stubbedFetch).to.have.been.calledWith('url', headers);
      });
  });
});
