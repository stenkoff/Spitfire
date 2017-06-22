class Artist < ActiveRecord::Base
  validates :name, presence: true
  has_many :albums
end
