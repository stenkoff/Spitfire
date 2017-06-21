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
          <div className='username'>
            <p> {this.props.currentUser.username} </p>
            <div>
              <button className='logout' onClick={this.props.logout}>Log Out</button>
            </div>
          </div>

          <div>

            <p className='playlists' >Playlists</p>
          </div>

        <footer className='playbar'>
          <h1>play</h1>
        </footer>

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
