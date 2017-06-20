class User < ActiveRecord::Base
  attr_reader :password
	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true
  after_initialize :ensure_session_token

  # belongs_to playlist, user_follows
  # has_many user_follows, playlist_follows, artist_follows, album_follows

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		user && user.is_password?(password) ? user : nil
	end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token ||= SecureRandom::urlsafe_base64(16)
		self.save!
		self.session_token
	end

	private
	def ensure_session_token
		self.session_token ||= SecureRandom::urlsafe_base64(16)
	end
end
