class Subvent < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :comments, through: :post
  belongs_to :user
end
