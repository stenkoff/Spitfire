import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbum } from '../../../actions/album_actions';
// import { addTrack } from '../../../actions/playlist_actions';
import AddTrack from '../playlists/add_track';
import { receiveSong } from '../../../actions/audio_actions';


class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.playTrack = this.playTrack.bind(this);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id != this.props.album.id) {
      this.props.fetchAlbum(nextProps.match.params.id)
    }
  }

  playTrack(track) {
    return (e) => {
      e.preventDefault();
      this.props.playTrack(track);
    }
  }

  render() {
    if (this.props.tracks && this.props.album.name) {
      let length = this.props.tracks.length;
      let songs = length === 1 ? `${length} SONG` : `${length} SONGS`;
      return (
        <section className='pl'>
          <div className='pl-image'>
          <img className = 'playlist-image'
            src={this.props.album.image_url}/>
            <div className='pl-info'>
              <h1>{this.props.album.name}</h1>
              <h2>
                <Link to={`/artists/${this.props.album.artist_id}`}>
                  {this.props.album.artist}
                </Link>
              </h2>
              <h3>{songs}</h3>
            </div>
          </div>

          <div className='pl-tracks'>
            <ol >
              {
                this.props.tracks.map((track, i) =>
                  <li key={i}>
                      <div  className='pl-tracks-left'>
                        <p className='num'>{i+1}.</p>
                          <p className='pl-tracks-btn' onClick={this.playTrack(track)}></p>
                      </div>
                      <div className='track-info'>
                        <h1>{track.title}</h1>
                        <h2>{track.artist}</h2>
                      </div>
                    <div  className='pl-tracks-right'>
                      <div className='pl-options'>
                      <h3>time</h3>

                      <AddTrack track={track}/>
                    </div>
                    </div>
                </li>)
              }
            </ol>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const tracks = Object.values(state.tracks);
  let album = state.albums[ownProps.match.params.id]
  if (!album) {
    album = { name: null, id: null, image_url: '', artist: ''}
  }
  return {
    album: album,
    tracks: tracks,
    addTrack: playlisting => addTrack(playlisting)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    addTrack: playlisting => dispatch(addTrack(playlisting)),
    removeTrack: playlisting => dispatch(removeTrack(playlisting)),
    playTrack: track => dispatch(receiveSong(track))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(AlbumShow);
