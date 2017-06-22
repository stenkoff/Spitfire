import React from 'react';

class Playlists extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const playlists = this.props.playlists
    return (
      <section  className='main'>

        <section className='playlist-header'>
          <ul className='music-bar'>
            <li>PLAYLISTS</li>
            <li>ARTISTS</li>
            <li>ALBUMS</li>
          </ul>
          <div className='new-playlist'>
            <button>NEW PLAYLIST</button>
          </div>
        </section>

        <section className='playlist-section'>
          {
            playlists.map(playlist =>
            <div className='playlist-item'>
              <img className='playlist-image' src={playlist.image_url}/>
              <h1>{playlist.name}</h1>
              <h2 className='creator'>{playlist.creator}</h2>
            </div>)
          }
        </section>

      </section>
    );
  }
}

export default Playlists;
