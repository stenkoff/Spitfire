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

            <div className='sidebar-top'>
              <h1>Search</h1>
              <h2>Browse</h2>
              <h3>Your Music</h3>
            </div>

            <div className='sidebar-bottom'>
              <p> {this.props.currentUser.username} </p>
              <button  onClick={this.props.logout}>Log Out</button>
            </div>

          </div>

        <div className='playbar'>
          <h1>play</h1>
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
