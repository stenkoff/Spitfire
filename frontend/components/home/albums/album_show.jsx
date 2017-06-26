import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbum } from '../../../actions/album_actions';
import { addTrack } from '../../../actions/playlist_actions';
import AddTrack from '../playlists/add_track';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id != this.props.album.id) {
      this.props.fetchAlbum(nextProps.match.params.id)
    }
  }

  render() {
    if (this.props.tracks) {
      let length = this.props.tracks.length;
      let songs = length === 1 ? `${length} SONG` : `${length} SONGS`;
      return (
        <section className='pl'>
          <div className='pl-image'>
          <img className = 'playlist-image'
            src={this.props.album.image_url}/>
            <div className='pl-info'>
              <h1>{this.props.album.name}</h1>
              <h2><Link to={`/artists/${this.props.album.artist_id}`}>{this.props.album.artist}</Link></h2>
              <h3>{songs}</h3>
            </div>
          </div>

          <div className='pl-tracks'>
            <ol >
              {
                this.props.tracks.map((track, i) =>
                  <li key={i}>
                    <div className='pl-title'>
                      <div className='ord'>{i+1}.</div>
                      <div>
                        <h1>{track.title}</h1>
                        <h2>{track.artist}</h2>
                        <audio controls="controls" src={`${track.audio}`}>
                          Play
                        </audio>
                      </div>
                    </div>
                    <div  className='pl-tracks-right'>
                      <h3>time</h3>
                      <AddTrack track={track}/>
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
  return {
    album: state.albums[ownProps.match.params.id],
    tracks: tracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    addTrack: playlisting => dispatch(addTrack(playlisting))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(AlbumShow);
