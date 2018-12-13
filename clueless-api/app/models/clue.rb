class Clue < ApplicationRecord
  validates_presence_of :question

  belongs_to :category
end
