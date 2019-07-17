function searcher(type, query) {
  return this.request(`${this.apiURL}/search?q=${query}&type=${type}`);
}

//try to use apply() or call() instead of bind() next.

export default function search() {
  return {
    artists: searcher.bind(this,'artist'),
    albums: searcher.bind(this,'album'),
    tracks: searcher.bind(this,'track'),
    playlists: searcher.bind(this,'playlist'),
  };
}
