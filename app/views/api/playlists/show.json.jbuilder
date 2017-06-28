json.playlist do
  json.extract! @playlist, :id, :name, :user
  json.track_ids @playlist.tracks.pluck(:id)
  json.image_url asset_path(@playlist.image.url)
end

json.tracks do
  @playlist.tracks.each_with_index do |track, i|
    json.set! track.id do
      json.extract! track, :title, :id
      json.playlist_ord i
      json.artist track.artist.name
      json.artist_id track.artist.id
      json.audio asset_path(track.audio.url)
    end
  end
end
