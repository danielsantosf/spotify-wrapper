/* to run: @babel/node albums.js */

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQCJ61XAOvFKiGHz6h9srp0lBuVxF0BHUUbN2d8y8M083HuJabroL3U0vdqHInc5BiB0iOw8YklmTSpAtyj1OomgO3jt_J5A6yjIHtpnfpZdTzwcy2WW9PMO-GG6jutkP3GYtDZSax8CjOnwMNlH33yxsxmEbGp8Xw'
})

const albums = spotify.search.albums('Madonna');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
