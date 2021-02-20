class User < ApplicationRecord
  has_many :polls, dependent: :destroy
  has_many :votes, dependent: :destroy
  
  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i.freeze
  validates :email, presence: true,
            uniqueness: true,
            length: { maximum: 50 },
            format: { with: VALID_EMAIL_REGEX }
  validates :password, presence: true, confirmation: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true, on: :create

  has_secure_password
  has_secure_token :authentication_token
  before_save :to_lowercase
  private

  def to_lowercase
    email.downcase!
  end
end
