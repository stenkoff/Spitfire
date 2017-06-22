import React from 'react';

class Playlists extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const playlists = this.props.playlists.map(playlist =>
      <li className='playlist-item'>
        <h1>{playlist.name}</h1>
        <h2 className='creator'>{playlist.creator}</h2>
      </li>)
    return (
      <section  className='main'>
        <ul className='music-bar'>
          <li>PLAYLISTS</li>
          <li>ARTISTS</li>
          <li>ALBUMS</li>
        </ul>
        <div className='new-playlist'>
          <button>NEW PLAYLIST</button>
        </div>
        <ul className='playlist'>{playlists}</ul>
      </section>
    );
  }
}

export default Playlists;
