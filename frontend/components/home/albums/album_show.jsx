import React from 'react';
import { connect } from 'react-redux';
import { fetchPAlbum } from '../../../actions/album_actions';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.id);
  }

  render() {
    if (this.props.tracks) {
      return (
        <section className='pl'>
          <div className='pl-image'>
            <div>
          <img
            key={this.props.album.id}
            src={this.props.album.image_url}/>
          </div>
          <div className='pl-info'>
          <h1>{this.props.album.name}</h1>
          <h1>{this.props.album.creator}</h1>
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
    album: state.albums[ownProps.match.params.id],
    tracks: tracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: id => dispatch(fetchAlbum(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(AlbumShow);
