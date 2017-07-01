import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPlaylist, removeTrack } from '../../../actions/playlist_actions';
import AddTrack from './add_track';
import { receiveSong, receiveSongs } from '../../../actions/audio_actions';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.deletePlaylist = this.deletePlaylist.bind(this);
    this.playTrack = this.playTrack.bind(this);
    this.playTracks = this.playTracks.bind(this);
    this.state = { play: '' }
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id != this.props.playlist.id) {
      this.props.fetchPlaylist(nextProps.match.params.id)
    }
  }

  deletePlaylist(e) {
    e.preventDefault();
    this.props.deletePlaylist(this.props.match.params.id)
      .then(this.props.history.push('/playlists'))
  }

  removeTrack(track) {
    return (e) => {
      e.preventDefault();
      const playlisting = {
        playlist_id: this.props.playlist.id,
        track_id: track.id
      }
      this.props.removeTrack(playlisting)
    }
  }

  playTrack(track) {
    return (e) => {
      e.preventDefault();
      this.props.playTrack(track);
    }
  }

  playTracks(e) {
    e.preventDefault();
    if (this.props.tracks.length > 0) {
      this.props.playTracks(this.props.tracks);
    }
  }

  render() {
    if (this.props.tracks && this.props.playlist.name) {
      let length = this.props.tracks.length;
      let songs = length === 1 ? `${length} SONG` : `${length} SONGS`;
      return (
      <section className='pl'>

        <div className='pl-image'>
          <img
            className = 'playlist-image'
            onClick ={this.playTracks}
            src={this.props.playlist.image_url}/>

          <div className='pl-info'>
            <h1>{this.props.playlist.name}</h1>
            <h2>By {this.props.playlist.creator}</h2>
            <h3>{songs}</h3>
            <button
              className='play-tracks-btn'
              onClick={this.playTracks}>PLAY</button>
            <button
              className='delete-playlist'
              onClick={(e) => this.deletePlaylist(e)}>DELETE</button>
          </div>
      </div>

      <ol className='pl-tracks'>
        {
          this.props.tracks.map((track, i) =>
            <li key={i}>
              <div  className='pl-tracks-left'>
                <p onClick={this.playTrack(track)}
                  className='num'>{i+1}.</p>
                  <p className='pl-tracks-btn' onClick={this.playTrack(track)}></p>

                </div>

              <div className='track-info'>
                <h1>{track.title}</h1>
                <h2><Link to={`/artists/${track.artist_id}`}>{track.artist}</Link></h2>
            </div>
            <div  className='pl-tracks-right'>
              <div className='pl-options'>
                <AddTrack className='add-to-pl' track={track}/>
                <button className= 'remove-from-pl' onClick={this.removeTrack(track)}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
              </div>
            </div>
          </li>)
          }
      </ol>
      </section>
    );

    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const tracks = Object.values(state.tracks);
  let playlist = state.playlists[ownProps.match.params.id]
  if (!playlist) {
    playlist = { name: null, id: null, image_url: '', artist: ''}
  }
  return {
    playlist: playlist,
    tracks: tracks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    deletePlaylist: id => dispatch(deletePlaylist(id)),
    removeTrack: playlisting => dispatch(removeTrack(playlisting)),
    playTrack: track => dispatch(receiveSong(track)),
    playTracks: tracks => dispatch(receiveSongs(tracks))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(PlaylistShow);
