json.artists do
  json.array!(@artists) do |artist|
    json.extract! artist, :id, :name
    json.image_url asset_path(artist.image.url)
  end
end

json.albums do
  json.array!(@albums) do |album|
    json.extract! album, :id, :name
    json.artist album.artist.name
    json.image_url asset_path(album.image.url)
  end
end
