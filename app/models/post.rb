class Post < ApplicationRecord
  belongs_to :subvent
  belongs_to :user
  has_many :comments, dependent: :destroy
  # belongs_to :user, optional: true
end
