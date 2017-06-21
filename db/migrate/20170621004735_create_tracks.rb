class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :album_id, null: false
      t.integer :ord, null: false

      t.timestamps null: false
    end
    add_index :tracks, :album_id, unique: true
  end
end
