class Track < ActiveRecord::Base
  validates :title, :album_id, :ord, presence: true;
  validates :ord, uniqueness: { scope: :album_id}

  belongs_to :album
  has_many :playlistings
  has_many :playlists, through: :playlistings
  has_one :artist, through: :album

end
