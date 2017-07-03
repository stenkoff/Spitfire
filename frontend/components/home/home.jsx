import React from 'react';
import { Switch, Route, Link, Redirect, NavLink } from 'react-router-dom';
import PlaylistsContainer from './playlists/playlists_container';
import PlaylistShow from './playlists/playlist_show';
import Albums from './albums/albums';
import AlbumShow from './albums/album_show';
import Artists from './artists/artists';
import ArtistShow from './artists/artist_show';
import MusicNav from './music_nav';
import BrowseNav from './browse/browse_nav';
import PlayBar from './playbar';
import Search from './search/search';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

class Home extends React.Component   {
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.currentUser) {
      return (
        <section className='home'>

          <div className='container'>
          <div className='sidebar'>
            <ul className='sidebar-top'>
              <li id='logo'>Spitfire</li>
              <li id = 'search'>
                <NavLink to='/search' activeClassName='green'>Search<i className="fa fa-search" aria-hidden="true"></i></NavLink>
              </li>
              <li id='line'></li>
              <li id='browse'>
                <NavLink to='/browse'  activeClassName='green'>Browse</NavLink>
              </li>
              <li id='music'>
                <NavLink to='/playlists'  activeClassName='green'>Your Music</NavLink>
              </li>
            </ul>

            <section className='sidebar-bottom'>
              <div id='user' className='bottom'> {this.props.currentUser.username}</div>
              <div>
                <button  className='bottom' onClick={this.props.logout}>Logout</button>
              </div>
            </section>
          </div>

          <Switch>
            <ProtectedRoute exact path='/' component={BrowseNav}/>
            <ProtectedRoute exact path='/browse' component={BrowseNav}/>
            <ProtectedRoute exact path='/browse/artists' component={BrowseNav}/>
            <ProtectedRoute exact path='/browse/albums' component={BrowseNav}/>
            <ProtectedRoute exact path='/playlists' component={MusicNav}/>
            <ProtectedRoute exact path='/artists' component={MusicNav}/>
            <ProtectedRoute exact path='/albums' component={MusicNav}/>
            <ProtectedRoute exact path='/playlists/:id' component={PlaylistShow}/>
            <ProtectedRoute exact path='/albums/:id' component={AlbumShow} />
            <ProtectedRoute exact path='/artists/:id' component={ArtistShow} />
            <ProtectedRoute exact path='/search' component={Search} />
          </Switch>

        </div>
        <ProtectedRoute path="/" component={PlayBar} />
      </section>

      );
    } else {
      return (
        <section>
        </section>
      );
    }
  }
}

export default Home;
