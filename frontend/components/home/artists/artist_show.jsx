import React from 'react';
import { connect } from 'react-redux';
import { fetchArtist } from '../../../actions/artist_actions';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id != this.props.artist.id) {
      this.props.fetchArtist(nextProps.match.params.id)
    }
  }

  render() {
    if (this.props.tracks) {
      return (
        <section className='artist'>
          <h1>{this.props.artist.name}</h1>
          <div>
            <img className ='artist-image'
              src={this.props.artist.image_url}/>
          </div>

            <h2>Popular</h2>
        <div className='artist-tracks'>
          <ol >
            {
              this.props.tracks.slice(5).map((track,idx) =>
                <li><div key={idx}>{track.title}</div></li>)
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
    artist: state.artists[ownProps.match.params.id],
    tracks: tracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(ArtistShow);
