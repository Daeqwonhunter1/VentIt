class Comment < ApplicationRecord
  belongs_to :post
  has_many :comments, through: :destroy
end
