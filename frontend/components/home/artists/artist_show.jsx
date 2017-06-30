import React from 'react';
import { connect } from 'react-redux';
import { fetchArtist } from '../../../actions/artist_actions';
import { addTrack } from '../../../actions/playlist_actions';
import AddTrack from '../playlists/add_track';
import { receiveSong, receiveSongs } from '../../../actions/audio_actions';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.playTrack = this.playTrack.bind(this);
    this.playTracks = this.playTracks.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id != this.props.artist.id) {
      this.props.fetchArtist(nextProps.match.params.id)
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
    if (this.props.tracks && this.props.artist.name)  {
    let tracks = this.props.tracks
      return (
        <section className='artist'>
          <div>
            <img className ='artist-image'
              onClick={this.playTracks}
              src={this.props.artist.image_url}/>
            </div>
          <div id='artist-info'>{this.props.artist.name}</div>
          <div id='popular'>Popular Tracks</div>
          <button
            className='play-tracks-btn'
            onClick={this.playTracks}>PLAY</button>



            <div className='artist-tracks'>
              <ol >
                {
                  tracks.map((track, i) =>
                    <li key={i}>
                        <div  className='artist-tracks-left'>
                          <p onClick={this.playTrack(track)}
                            className='num'>{i+1}.</p>
                            <p className='artist-tracks-btn' onClick={this.playTrack(track)}></p>
                        </div>
                        <div className='artist-track-info'>
                          <h1>{track.title}</h1>
                          <h2>{this.props.artist.name}</h2>
                        </div>
                      <div  className='artist-tracks-right'>
                        <div className='artist-options'>
                        <AddTrack className='add-to-pl' track={track}/>
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
  let artist = state.artists[ownProps.match.params.id]
  if (!artist) {
    artist = { name: '', id: null, image_url: ''}
  }
  return {
    artist,
    tracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id)),
    addTrack: playlisting => dispatch(addTrack(playlisting)),
    playTrack: track => dispatch(receiveSong(track)),
    playTracks: tracks => dispatch(receiveSongs(tracks))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(ArtistShow);

// {/* <div className='artist-tracks'>
//   <h2>Popular</h2>
//   <h1>{this.props.artist.name}</h1>
//   <ol >
//     {
//       this.props.tracks.slice(5).map((track,idx) =>
//         <li><div key={idx}>{track.title}</div></li>)
//       }
//
//   </ol>
// </div> */}
