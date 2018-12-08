class GuessSerializer < ActiveModel::Serializer
  attributes :id, :answer

  belongs_to :user
end
