class Playlisting < ActiveRecord::Base
  validates :playlist, :track, :ord, presence: true
  validates :ord, uniqueness: { scope: :playlist }

  belongs_to :playlist
  belongs_to :track
end
