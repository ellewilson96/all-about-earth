class Clue < ActiveRecord::Base
  attr_accessor :airdate, :answer, :question, :value, :category_id, :category
  belongs_to :category

end
