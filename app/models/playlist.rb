class Playlist < ActiveRecord::Base
  validates :user, :name, presence: true;

  belongs_to :user
end
