import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistShow from './playlist_show';
import AddTrackModal from '../modal/add_track_modal';
import { connect } from 'react-redux';
import { addTrack } from '../../../actions/playlist_actions';

class AddTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.addTrack = this.addTrack.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.match.params.id != this.props.playlist.id) {
  //     this.props.fetchPlaylist(nextProps.match.params.id)
  //   }
  // }

  render() {
    const playlists = this.props.playlists
    return (
      <section  className='main'>

        <div>
          <button className='add-btn' onClick={()=>this.openModal()}>+</button>
          <AddTrackModal isOpen={this.state.modal} onClose={() => this.closeModal()}>
            <div className='add-to-playlist'>
              <button id='close-button' onClick={() => this.closeModal()}>×</button>
              <h1 id='add-to-pl-header'>Add to playlist</h1>
            </div>
              <section className='playlist-options'>
                {
                  playlists.map(playlist =>
                  <div key={playlist.id} className='playlist-item'>
                    <img
                      className='playlist-image'
                      src={playlist.image_url} onClick={(e) => this.addTrack(e, playlist)}/>
                    <h1>{playlist.name}</h1>
                    <h2 className='creator'>{playlist.creator}</h2>
                  </div>)
                }
              </section>
          </AddTrackModal>
        </div>
      </section>

    );
  }

  openModal() {
    window.scrollTo(0,0)
    this.setState({ modal: true });
  }

  closeModal() {
    this.setState({ modal: false });
  }

  addTrack(e, playlist) {
    // (e) => {
      e.preventDefault();
      const playlisting = {
        track_id: this.props.track.id,
        playlist_id: playlist.id
      }
      this.props.addTrack(playlisting)
        .then(() => this.closeModal())
    // }
  }
}


const mapStateToProps = state => {
  // const ids = state.session.currentUser.playlist_ids;
  const ids = Object.keys(state.playlists)
  return {
    playlists: ids.map(id => state.playlists[id]),
    addTrack: playlisting => addTrack(playlisting)
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//
//   };
// };

export default connect(
  mapStateToProps)
  (AddTrack);
