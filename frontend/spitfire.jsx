import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';
import {fetchPlaylist} from './actions/playlist_actions'
import {fetchAlbum} from './actions/album_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const user = window.currentUser
    const preloadedState = {
      session: { currentUser: user.user },
      playlists: user.playlists,
      albums: user.albums,
      artists: user.artists
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.dispatch = store.dispatch;
  // window.fetchPlaylist = fetchPlaylist;
  // window.fetchAlbum = fetchAlbum;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
