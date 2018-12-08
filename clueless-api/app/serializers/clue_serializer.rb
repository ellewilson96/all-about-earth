class ClueSerializer < ActiveModel::Serializer
  attributes :id, :answer, :question, :value, :airdate, :category_id

  has_many :categories
  has_many :clues, through: :categories
end
