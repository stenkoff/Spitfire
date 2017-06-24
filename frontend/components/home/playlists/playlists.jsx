import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistShow from './playlist_show';
import Modal from '../modal/modal';

class Playlists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      playlist: {
        name: ''
      }
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
                <button id='close-button' onClick={() => this.closeModal()}>x</button>
                <h1>Create new playlist</h1>
                <label className='new-playlist-name'>
                  <input
                    onChange={this.handleChange('name')}
      							placeholder='Start typing...'
      							value={this.state.name} />
                </label>
      					<div className='modal-buttons' >
                  <button id='m1' onClick={() => this.closeModal()}>CANCEL</button>
      	          <button id='m2' onClick={e => this.handleSubmit(e)}>CREATE</button>
      					</div>
            </Modal>
          </div>

        <section className='playlist-section'>
          {
            playlists.map(playlist =>
            <div key={playlist.id} className='playlist-item'>
              <img className='playlist-image' src={playlist.image_url}/>
              <h1><Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link></h1>
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

  handleChange(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit() {
    e.preventDefault();
    const playlist = Object.assign({}, this.state.playlist);
    this.props.createPlaylist(playlist)
  }
}

export default Playlists;
