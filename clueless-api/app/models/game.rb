class Game < ApplicationRecord
  has_many :categories
  has_many :clues, through: :categories
end
