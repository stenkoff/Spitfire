import React from 'react';
import { Switch, Route, Link, Redirect, NavLink } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../../util/route_util';
import BrowseArtists from './browse_artists';
import BrowseAlbums from './browse_albums';

const BrowseNav = () => {

  return (

    <div className='music'>
      <section className='playlist-header'>
        <ul className='music-bar'>
          <li><NavLink to='/browse/artists' activeClassName='music-nav-active'
            id='music'>ARTISTS</NavLink></li>
          <li><NavLink to='/browse/albums' activeClassName='music-nav-active'
            id='music'>ALBUMS</NavLink></li>
        </ul>
        <h1 className='browse-artists'>Browse</h1>
      </section>
      <Switch>
        <ProtectedRoute exact path='/' component={BrowseArtists} />
        <ProtectedRoute exact path='/browse' component={BrowseArtists} />
        <ProtectedRoute exact path='/browse/artists' component={BrowseArtists} />
        <ProtectedRoute exact path='/browse/albums' component={BrowseAlbums} />
      </Switch>
    </div>
    );

}

export default BrowseNav;
