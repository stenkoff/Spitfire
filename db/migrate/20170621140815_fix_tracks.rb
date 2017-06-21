class FixTracks < ActiveRecord::Migration
  def change
    remove_index :albums, :artist_id
    add_index :albums, :artist_id
  end
end
