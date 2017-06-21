json.extract! user, :id, :username

json.playlists do
  user.playlists.each do |playlist|
    json.set! playlist.id do
      json.extract! playlist, :id, :name, :user_id
    end
  end
end
