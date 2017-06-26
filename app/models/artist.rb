class Artist < ActiveRecord::Base
  validates :name, presence: true
  has_many :albums
  has_many :tracks, through: :albums
  
  has_attached_file :image, default_url: 'chance.png'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
