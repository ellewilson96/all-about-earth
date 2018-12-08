class Category < ApplicationRecord
  has_many :clues
  has_many_and_belongs_to :games
end
