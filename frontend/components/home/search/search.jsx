import React from 'react';
import { fetchSearch } from '../../../actions/search_actions';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import AddTrack from '../playlists/add_track';
import { receiveSong, receiveSongs } from '../../../actions/audio_actions';
import { AuthRoute, ProtectedRoute } from '../../../util/route_util';
import PlaylistResults from './playlist_results';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' }
    this.handleChange = this.handleChange.bind(this)
    this.playTrack = this.playTrack.bind(this);
  }
  //
  handleChange() {
    return e => {
      // this.setState({ ['search']: })
      this.setState({['search']: e.currentTarget.value})
      this.props.fetchSearch(e.currentTarget.value)
    }
  }

  componentDidMount() {
    this.props.fetchSearch();
  }

  playTrack(track) {
    return (e) => {
      e.preventDefault();
      this.props.playTrack(track);
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   debugger
  //   if (this.props.results.albums != nextProps.results.albums) {
  //     this.props.fetchSearch();
  //   }
  // }

  render() {
    let playlists = []
    let albums = []
    let artists = []
    let tracks = []
    if (this.props.results.playlists) {
      playlists = this.props.results.playlists
      albums = this.props.results.albums
      artists = this.props.results.artists
      tracks = this.props.results.tracks
    }
      return (
        <section className='search'>
          <div className='search-header'>
             <label>Search for an Artist, Song, Album or Playlist</label>
               <input
                 className = 'search-input'
                 onChange = {this.handleChange('search')}
                 placeholder = 'Start typing...'
                 value = {this.state.search}/>
                </div>
         <div className='results'>

           <section className='playlist-section'>
             {
               playlists.map(playlist =>
               <div key={playlist.id} className='playlist-item'>
                 <Link to={`/playlists/${playlist.id}`}><img className='playlist-image' src={playlist.image_url}/>
                 <h1>{playlist.name}</h1></Link>
                 <h2 className='creator'>{playlist.creator}</h2>
               </div>)
             }
           </section>


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

           <div className='pl-tracks'>
             <ol >
               {
                 tracks.map((track, i) =>
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
                       <AddTrack track={track}/>
                     </div>
                     </div>
                 </li>)
               }
             </ol>
           </div>
         </div>
        </section>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    fetchSearch: search => dispatch(fetchSearch(search)),
    playTrack: track => dispatch(receiveSong(track))
  };
};

const mapStateToProps = state => {
  const user = state.session.currentUser;
  return {
    results: state.search
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Search);



  // if (this.props.results.playlists) {
  //   let playlists = this.props.results.playlists
  //   let albums = this.props.results.albums
  //   let artists = this.props.results.artists
  //   let tracks = this.props.results.tracks
  //   return (
  //     <PlaylistResults playlists={playlists}/>
  //   );
  //   else {
  //     return null;
  //   }
  // }
