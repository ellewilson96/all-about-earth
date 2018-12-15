class CluesSerializer < ActiveModel::Serializer
  attributes :id, :question, :answer, :value, :airdate, :category
end
