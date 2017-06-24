json.playlist do
  json.extract! @playlist, :id, :name, :user
  json.track_ids @playlist.tracks.pluck(:id)
end

json.tracks do
  @playlist.tracks.each do |track|
    json.set! track.id do
      json.extract! track, :title
      json.audio asset_path(track.audio.url)
    end
  end
end
