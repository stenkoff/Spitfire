import React from 'react';
import { fetchSearch } from '../../../actions/search_actions';
import { connect } from 'react-redux';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { search: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    return e => {
      // this.setState({ ['search']: })
      this.props.fetchSearch({search: e.currentTarget.value })
    }
  }

  componentDidMount() {
    this.props.fetchSearch();
  }

  render() {
    debugger
    let playlists
    let albums
    let artists
    let tracks
    if (this.props.results) {
      playlists = this.props.results.playlists.map((playlist, i) =>
        <li key={i}>{playlist.name}</li>)
      albums = this.props.results.albums.map((album, i) =>
        <li key={i}>{album.name}</li>)
      artists = this.props.results.artists.map((artist, i) =>
        <li key={i}>{artist.name}</li>)
      tracks = this.props.results.tracks.map((track, i) =>
        <li key={i}>{track.title}</li>)
    } else {
      artists = ''
      albums = ''
      tracks = ''
      playlists = ''
    }
      return (
        <section>
          <form>
             <label>Search for an Artist, Song, Album or Playlist
               <input
                 className = 'search-input'
                 onChange = {this.handleChange('search')}
                 placeholder = 'Start typing'
                 value = {this.state.search}/>
                 </label>
         </form>

           <div>{playlists}</div>
           <div>{albums}</div>
           <div>{artists}</div>
           <div>{tracks}</div>
        </section>

    );
  }
}

const mapDispatchToProps = state => {
  return {
    fetchSearch: search => dispatch(fetchSearch(search)),
  };
};

const mapStateToProps = state => {
  const user = state.session.currentUser;
  return {
    results: state.results
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Search);
