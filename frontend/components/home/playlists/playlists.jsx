import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistShow from './playlist_show';
import Modal from '../modal/modal';

class Playlists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      playlistName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const playlists = this.props.playlists

    return (
      <section  className='main'>

          <div className='new-playlist'>
            <button onClick={()=>this.openModal()}>NEW PLAYLIST</button>
            <Modal className='new-playlist-form' isOpen={this.state.modal} onClose={() => this.closeModal()}>
                <div className='new-playlist-top'>
                <button id='close-button2' onClick={() => this.closeModal()}>×</button>
                <h1>Create new playlist</h1>
              </div>
                <label className='new-playlist-name'>
                  <input
                    onChange={this.handleChange('name')}
      							placeholder='Start typing...'
      							value={this.state.name} />
                </label>
      					<div className='modal-buttons2' >
                  <button id='m3' onClick={() => this.closeModal()}>CANCEL</button>
      	          <button id='m4' onClick={e => this.handleSubmit(e)}>CREATE</button>
      					</div>
            </Modal>
          </div>

        <section className='playlist-section'>
          {
            playlists.map(playlist =>
            <div key={playlist.id} className='playlist-item'>
              <Link to={`/playlists/${playlist.id}`}><img className='playlist-image' src={playlist.image_url}/>
              <h1>{playlist.name}</h1></Link>
              <h2 className='creator'>{playlist.creator}</h2>
            </div>)
          }
        </section>

      </section>
    );
  }

  openModal() {
    this.setState({ modal: true });
  }

  closeModal() {
    this.setState({ modal: false });
  }

  handleChange() {
    return e => {
      this.setState({playlistName: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!!this.state.playlistName) {
      const playlist = {user_id: this.props.user.id, name: this.state.playlistName};
      this.props.createPlaylist(playlist)
        .then(({playlist}) => {
          return this.props.history.push(`playlists/${playlist.id}`)
        }
      );
    }
  }
}

export default Playlists;
