json.artist do
  json.extract! @artist, :id, :name
  # json.track_ids @artist.tracks.pluck(:id)
  json.image_url asset_path(@artist.image.url)
end

# json.tracks do
#   @artist.tracks.each do |track|
#     json.set! track.id do
#       json.extract! track, :title
#       json.audio asset_path(track.audio.url)
#     end
#   end
# end


json.albums do
  json.array!(@artist.albums) do |album|
    json.extract! album, :id, :name
    json.artist album.artist.name
    json.image_url asset_path(album.image.url)
  end
end

json.tracks do
  json.array!(@artist.tracks[0..4]) do |track|
    json.extract! track, :id, :title, :album_id, :ord
    json.audio asset_path(track.audio.url)
    json.artist track.artist.name
    json.artist_id track.artist.id
    json.image_url asset_path(track.album.image.url)
  end
end
