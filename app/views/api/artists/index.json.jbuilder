@artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :name
    json.image_url asset_path(artist.image.url)
  end
end
