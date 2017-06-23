import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../../../actions/playlist_actions';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.id);
  }

  render() {
    if (this.props.tracks) {
      return (
        <section className='pl'>
          <div className='pl-image'>
            <div>
          <img
            key={this.props.playlist.id}
            src={this.props.playlist.image_url}/>
          </div>
          <div className='pl-info'>
          <h1>{this.props.playlist.name}</h1>
          <h1>{this.props.playlist.creator}</h1>
          </div>
        </div>
        <div className='pl-tracks'>
          <ol >
            {
              this.props.tracks.map(track =>
                <li><div>{track.title}</div></li>)
              }
              <li><div>title</div></li>
              <li><div>title</div></li>
              <li><div>title</div></li>
              <li><div>title</div></li>
              <li><div>title</div></li>
              <li><div>title</div></li>
              <li><div>title</div></li>
              <li><div>title</div></li>
              <li><div>title</div></li>
              <li><div>title</div></li>
              <li><div>title</div></li>
              <li><div>title</div></li>

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
    playlist: state.playlists[ownProps.match.params.id],
    tracks: tracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(PlaylistShow);
