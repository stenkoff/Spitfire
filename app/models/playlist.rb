class Playlist < ActiveRecord::Base
  validates :user, :name, presence: true;

  belongs_to :user
  has_many :playlistings
  has_many :tracks, through: :playlistings
end
