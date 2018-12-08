class ClueSerializer < ActiveModel::Serializer
  attributes :id, :answer, :question, :value, :airdate

  has_many :categories
  has_many :clues, through: :categories
end
