@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :name, :user
    json.image_url asset_path(playlist.image.url)
  end
end
