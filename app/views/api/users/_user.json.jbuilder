json.user do
  json.extract! user, :id, :username
  json.playlist_ids user.playlists.pluck(:id)
end

json.playlists do
  user.playlists.each do |playlist|
    json.set! playlist.id do
      json.extract! playlist, :id, :name, :user_id
      json.creator playlist.user.username
    end
  end
end
