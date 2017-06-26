import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPlaylist } from '../../../actions/playlist_actions';
import AddTrack from './add_track';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.deletePlaylist = this.deletePlaylist.bind(this);
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

  render() {

    if (this.props.tracks) {
      let length = this.props.tracks.length;
      let songs = length === 1 ? `${length} SONG` : `${length} SONGS`;
      return (
      <section className='pl'>

        <div className='pl-image'>
          <img
            className = 'playlist-image'
            src={this.props.playlist.image_url}/>

          <div className='pl-info'>
            <h1>{this.props.playlist.name}</h1>
            <h2>By {this.props.playlist.creator}</h2>
            <h3>{songs}</h3>
            <button
              onClick={e => this.deletePlaylist(e)}>DELETE</button>
          </div>
      </div>

      <ol className='pl-tracks'>
        {
          this.props.tracks.map((track, i) =>
            <li key={i}>
              <div className='pl-title'>
                <div className='ord'>{i+1}.</div>
                <div>
                  <h1>{track.title}</h1>
                  <h2><Link to={`/artists/${track.artist_id}`}>{track.artist}</Link></h2>
                  <audio controls="controls" src={`${track.audio}`}>
                    Play
                  </audio>
                </div>
              </div>
              <div  className='pl-tracks-right'>
                <h3>time</h3>
                <AddTrack />
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
  return {
    playlist: state.playlists[ownProps.match.params.id],
    tracks: tracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    deletePlaylist: id => dispatch(deletePlaylist(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(PlaylistShow);
