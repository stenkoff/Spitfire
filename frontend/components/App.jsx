import React from 'react';
import HomeContainer from './home/home_container';
import PlaylistsContainer from './home/playlists/playlists_container';
import SessionFormContainer from './session_form/session_form_container';
import PlaylistShow from './home/playlists/playlist_show';
import Albums from './home/albums/albums';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <section className='body'>
      <ProtectedRoute path="/" component={HomeContainer} />

      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </section>
);
};

export default App;
