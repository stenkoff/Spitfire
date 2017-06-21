class FixTrackAlbumIndex < ActiveRecord::Migration
  def change
    remove_index :tracks, :album_id
    add_index :tracks, :album_id
  end
end
