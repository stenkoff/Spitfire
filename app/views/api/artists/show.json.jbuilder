json.artist do
  json.extract! @artist, :id, :name
  json.track_ids @artist.tracks.pluck(:id)
  json.image_url asset_path(@artist.image.url)
end

json.tracks do
  @artist.tracks.each do |track|
    json.set! track.id do
      json.extract! track, :title
      json.audio asset_path(track.audio.url)
    end
  end
end
