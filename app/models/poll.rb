class Poll < ApplicationRecord
  #associations
  has_many :options, dependent: :destroy
  has_many :votes, dependent: :destroy
  has_many :voters, through: :votes, source: :user
  belongs_to :user
  
  #validation
  validates :question, presence: true, length: { maximum: 200 }
  validates :user_id, presence: true
  accepts_nested_attributes_for :options, allow_destroy: true
end
