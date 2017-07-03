import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';
import PlaylistsReducer from './playlists_reducer';
import AlbumsReducer from './albums_reducer';
import ArtistsReducer from './artists_reducer';
import AudioReducer from './audio_reducer';
import SearchReducer from './search_reducer';
import BrowseReducer from './browse_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistsReducer,
  tracks: TracksReducer,
  albums: AlbumsReducer,
  artists: ArtistsReducer,
  queue: AudioReducer,
  search: SearchReducer,
  browse: BrowseReducer,
});

export default RootReducer;
