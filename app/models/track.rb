class Track < ActiveRecord::Base
  validates :title, :album_id, :ord, presence: true;
  validates :ord, uniqueness: { scope: :album_id}

  belongs_to :album
end
