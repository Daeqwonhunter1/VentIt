class Subvent < ApplicationRecord
  has_many :post, dependent: :destroy
  has_many :comments, through: :post
end
