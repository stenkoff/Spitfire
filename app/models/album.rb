class Album < ActiveRecord::Base
  belongs_to :artist
  has_many :tracks

  has_attached_file :image, default_url: 'playlist_default.jpg'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*Z/
end
