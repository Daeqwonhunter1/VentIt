class Post < ApplicationRecord
  belongs_to :subvent
  has_many :comments, dependent: :destroy
end
