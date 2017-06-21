class Track < ActiveRecord::Base
  validates :title, :album_id, :ord, presence: true;

  belongs_to :album
end
