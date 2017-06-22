import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Navbar from './navbar';
import PlaylistsContainer from './playlists/playlists_container';

class Home extends React.Component   {
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.currentUser) {
      return (
        <section className='home'>

          <div className='sidebar'>

            <ul className='sidebar-top'>
              <li id='logo'>Spitfire</li>
              <li id='search'>Search</li>
              <li id='line'></li>
              <li id='browse'>Browse</li>
              <li id='music'>Your Music</li>
            </ul>

            <section className='sidebar-bottom'>
              <div id='user' className='bottom'> {this.props.currentUser.username}</div>
              <div>
                <button  className='bottom' onClick={this.props.logout}>Log Out</button>
              </div>
            </section>

          </div>

        <div className='playbar'>
          <h1></h1>
        </div>

          <PlaylistsContainer />
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
