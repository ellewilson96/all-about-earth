class Round < ApplicationRecord
  belongs_to :categories
  belongs_to :user 
end
