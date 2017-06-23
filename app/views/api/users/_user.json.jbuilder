json.user do
  json.extract! user, :id, :username
  json.playlist_ids user.playlists.pluck(:id)
  json.album_ids user.albums.pluck(:id).uniq
end

json.playlists do
  user.playlists.each do |playlist|
    json.set! playlist.id do
      json.extract! playlist, :id, :name, :user_id
      json.creator playlist.user.username
      json.image_url asset_path(playlist.image.url)
    end
  end
end

json.albums do
  user.albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :name, :artist_id
      json.artist album.artist.name
      json.image_url asset_path(album.image.url)
    end
  end
end
