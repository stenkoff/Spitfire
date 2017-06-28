import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from '../modal/modal';
import { createPlaylist } from '../../../actions/playlist_actions'
// import { fetchArtists } from '../../../artists/playlist_artists'


class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      playlistName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchArtists();
  // }

  render() {
    // if (this.props.artsts)
    const artists = this.props.artists

    return (
      <section  className='main'>
        <div className='new-playlist'>
          <button onClick={()=>this.openModal()}>NEW PLAYLIST</button>
          <Modal className='new-playlist-form' isOpen={this.state.modal} onClose={() => this.closeModal()}>
              <button id='close-button' onClick={() => this.closeModal()}>×</button>
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
            artists.map(artist =>
            <div key={artist.id} className='playlist-item'>
              <Link to={`/artists/${artist.id}`}>
                <img className='artists-image' src={artist.image_url}/>
                <h1>{artist.name}</h1>
              </Link>
            </div>)
          }
        </section>

      </section>
    );
  // } else {
  //   return null;
  // }
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

const mapStateToProps = (state, ownProps) => {
  const user = state.session.currentUser;
  return {
    artists: user.artist_ids.map(id => state.artists[id]),
    user: state.session.currentUser
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
    // fetchArtists: artists => dispatch(fetchArtists());
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Artists);
