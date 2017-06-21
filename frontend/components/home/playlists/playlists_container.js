import React from 'react';
import { connect } from 'react-redux';
import Playlists from './playlists';
// import { fetchPlaylistsForUser } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.session.currentUser;
  return {
    playlists: user.playlist_ids.map(id => state.playlists[id])
    // playlists: Object.keys(state.currentUser.playlists).map(id => state.currentUser.playlists[id])
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   fetchPlaylists: () => dispatch(fetchPlaylistsForUser());
// };

export default connect(
  mapStateToProps)
  (Playlists);
