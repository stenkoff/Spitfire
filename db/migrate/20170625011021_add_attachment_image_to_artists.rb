class AddAttachmentImageToArtists < ActiveRecord::Migration
  def self.up
    change_table :artists do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :artists, :image
  end
end
