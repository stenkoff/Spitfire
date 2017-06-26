json.album do
  json.extract! @album, :id, :name, :artist_id
  json.artist @album.artist.name
  json.track_ids @album.tracks.pluck(:id)
end

json.tracks do
  @album.tracks.each do |track|
    json.set! track.id do
      json.extract! track, :title, :id
      json.audio asset_path(track.audio.url)
    end
  end
end
