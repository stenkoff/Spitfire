@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :name, :user
  end
end
