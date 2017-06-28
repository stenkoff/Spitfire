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
          <div>
            <img className ='artist-image'
              src={this.props.artist.image_url}/>
            </div>

        <div className='artist-tracks'>
          <h2>Popular</h2>
          <h1>{this.props.artist.name}</h1>
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
    fetchArtist: id => dispatch(fetchArtist(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(ArtistShow);
