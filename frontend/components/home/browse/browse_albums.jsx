import React from 'react';
import { connect } from 'react-redux';
import { fetchArtists } from '../../../actions/artist_actions';
import { Link } from 'react-router-dom'

class BrowseAlbums extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtists();
  }
  // componentWillReceiveProps() {
  //   this.props.fetchAlbums();
  // }

  render() {
    let albums = this.props.albums
    if (albums) {
      return (
        <section>
          <section className='playlist-section'>
            {
              albums.map(album =>
              <div key={album.id} className='playlist-item'>
                <Link to={`/albums/${album.id}`}>
                <img className='playlist-image'
                  src={album.image_url}/>
                  <h1>{album.name}</h1>
                </Link>
                <h2 className='creator'>{album.artist}</h2>
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
    albums: state.browse.albums
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseAlbums);
// export default Browse;
