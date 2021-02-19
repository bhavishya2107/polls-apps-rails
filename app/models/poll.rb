class Poll < ApplicationRecord
  #associations
  has_many :options, dependent: :destroy
  belongs_to :user
  #validation
  validates :question, presence: true, length: { maximum: 200 }
  validates :user_id, presence: true
  accepts_nested_attributes_for :options, allow_destroy: true
end
