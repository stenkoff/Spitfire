import React from 'react';
import { connect } from 'react-redux';
import { fetchArtists } from '../../../actions/artist_actions';
import { Link } from 'react-router-dom'

class BrowseArtists extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtists();
  }


  render() {
    let artists = this.props.artists
    if (artists) {
      return (
        <section>
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
      )
    } else {
      return null;
    }
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchArtists: () => dispatch(fetchArtists())
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
    artists: state.browse.artists
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseArtists);
// export default Browse;
