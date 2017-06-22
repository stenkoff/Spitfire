class Playlist < ActiveRecord::Base
  validates :user, :name, presence: true;

  belongs_to :user
  has_many :playlistings
  has_many :tracks, through: :playlistings

  has_attached_file :image, default_url: 'playlist_default.jpg'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*Z/
end


# styles: { medium: “300X300>”, thumb: “100X100>” },
