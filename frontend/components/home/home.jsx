import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import PlaylistsContainer from './playlists/playlists_container';
import PlaylistShow from './playlists/playlist_show';
import Albums from './albums/albums';
import AlbumShow from './albums/album_show';
import Artists from './artists/artists';
import ArtistShow from './artists/artist_show';
import MusicNav from './music_nav';
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
              <li id='search'>Search</li>
              <li id='line'></li>
              <li id='browse'>Browse</li>
              <li><Link to='/playlists' id='music'>Your Music</Link></li>
            </ul>

            <section className='sidebar-bottom'>
              <div id='user' className='bottom'> {this.props.currentUser.username}</div>
              <div>
                <button  className='bottom' onClick={this.props.logout}>Log Out</button>
              </div>
            </section>
          </div>

          <Switch>
            <ProtectedRoute exact path='/playlists' component={MusicNav}/>
            <ProtectedRoute exact path='/artists' component={MusicNav}/>
            <ProtectedRoute exact path='/albums' component={MusicNav}/>
            <ProtectedRoute exact path='/playlists/:id' component={PlaylistShow}/>
            <ProtectedRoute exact path='/albums/:id' component={AlbumShow} />
            <ProtectedRoute exact path='/artists/:id' component={ArtistShow} />
          </Switch>

      </div>
          <div className='playbar'>
            <h1></h1>
          </div>
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
