class Clue < ActiveRecord::Base
  has_and_belongs_to_many :categories
  has_many :users, through: :categories
end
