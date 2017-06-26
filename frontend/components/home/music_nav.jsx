import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import PlaylistsContainer from './playlists/playlists_container';
import PlaylistShow from './playlists/playlist_show';
import Albums from './albums/albums';
import AlbumShow from './albums/album_show';
import Artists from './artists/artists';
import ArtistShow from './artists/artist_show';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const MusicNav = () => {


    return (

  <div className='music'>
  <section className='playlist-header'>
    <ul className='music-bar'>
      <li><Link to='/playlists' id='music'>PLAYLISTS</Link></li>
      <li><Link to='/artists' id='music'>ARTISTS</Link></li>
      <li><Link to='/albums' id='music'>ALBUMS</Link></li>
    </ul>
  </section>
    <Switch>
      <ProtectedRoute exact path='/' component={PlaylistsContainer}/>
      <ProtectedRoute exact path='/playlists' component={PlaylistsContainer}/>
      <ProtectedRoute exact path='/albums' component={Albums} />
      <ProtectedRoute exact path='/artists' component={Artists} />
    </Switch>
  </div>
  );

}

export default MusicNav
