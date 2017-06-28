json.playlists do
  json.array!(@playlists) do |playlist|
    json.extract! playlist, :id, :name, :user
    json.image_url asset_path(playlist.image.url)
  end
end

json.albums do
  json.array!(@albums) do |album|
    json.extract! album, :id, :name
    json.artist album.artist.name
    json.image_url asset_path(album.image.url)
  end
end

json.artists do
  json.array!(@artists) do |artist|
    json.extract! artist, :id, :name
    json.image_url asset_path(artist.image.url)
  end
end

json.tracks do
  json.array!(@tracks) do |track|
    json.extract! track, :id, :title, :album_id, :ord
    json.audio asset_path(track.audio.url)
  end
end
