import React from 'react';

class Playlists extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const playlists = this.props.playlists.map(playlist => <li className='playlists'>{playlist.name}</li>)
    return (
      <section>
        <ul>{playlists}</ul>
      </section>
    );
  }
}

export default Playlists;
