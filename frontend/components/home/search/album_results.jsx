import React from 'react';
import { NavLink } from 'react-router-dom';

class AlbumResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className='playlist-section'>
        <h1>Playlists</h1>
        {
          playlists.map(playlist =>
          <div key={playlist.id} className='playlist-item'>
            <NavLink to={`/playlists/${playlist.id}`}><img className='playlist-image' src={playlist.image_url} playlist={playlist}/>
            <h1>{playlist.name}</h1></NavLink>
            <h2 className='creator'>{playlist.creator}</h2>
          </div>)
        }
      </section>
    );
  }
}

export default AlbumResults;
