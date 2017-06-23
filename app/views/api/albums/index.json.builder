@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :name, :artist_id
    json.image_url asset_path(album.image.url)
  end
end
