## Component Hierarchy
**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - Sidebar
  - Playbar

**MyMusicContainer**
  - MyPlaylists
  - MySongs
  - MyAlbums
  - MyArtists

**Playlst Container**
  - Playlist
  - CreatePlayList

**ArtistContainer**
  - Overview
  - RelatedArtist

**SearchContainer**
  - Search
  - ArtistSearchResult
  - TrackSearchResult
  - AlbumSearchResult
  - PlaylistSearchResult

**AddToPlaylistContainer**
  - AddToPlaylist

**ProfileSettingContainer**
  - ProfileSettings

## Bonus
**DiscoverContainer**
  - Discover


  |Path   | Component   |
  |-------|-------------|
  | "/sign-up" | "AuthFormContainer" |
  | "/sign-in" | "AuthFormContainer" |
  | "/mymusic/playlists" | "MyPlaylists" |
  | "/mymusic/songs" | "MySongs" |
  | "/mymusic/albums" | "MyAlbums" |
  | "/mymusic/artists" | "MyArtists" |
  | "/playlists/:playlistId" | "PlaylistContainer" |
  | "/albums/:albumId" | "AlbumContainer" |
  | "/artists/:artistId" | "ArtistContainer" |
  | "/search/playlists" | "SearchContainer" |
  | "/search/songs" | "SearchContainer" |
  | "/search/albums" | "SearchContainer" |
  | "/search/artists" | "SearchContainer" |
  | "/settings" | "ProfileSettingsContainer"
