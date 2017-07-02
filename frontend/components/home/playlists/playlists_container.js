import React from 'react';
import { connect } from 'react-redux';
import Playlists from './playlists';
import { createPlaylist } from '../../../actions/playlist_actions'
// import { fetchPlaylistsForUser } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.session.currentUser;
  const playlist_ids = Object.keys(state.playlists)
  return {
    playlists: playlist_ids.map(id => state.playlists[id]),
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
    // fetchPlaylists: playlist => dispatch(fetchPlaylists(playlist))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Playlists);
