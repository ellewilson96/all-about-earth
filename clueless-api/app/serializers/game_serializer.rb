class GameSerializer < ActiveModel::Serializer
  attributes :id, :date

  has_many :categories
  has_many :clues, through: :categories
end
