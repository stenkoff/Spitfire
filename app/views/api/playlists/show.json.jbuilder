json.extract! @playlist, :id, :name, :user
@playlist.playlistings do |playlisting|
  json.set! playlisting.ord do
    json.playlist_ord playlisting.ord
    json.title playlisting.track.title
    # json.album
    # json.artist
  end
end
