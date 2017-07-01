@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :title, :album_id, :ord
    json.audio asset_path(track.audio.url)
    json.artist track.artist.name
    json.artist_id track.artist.id
    json.image_url asset_path(track.album.image.url)
  end
end
