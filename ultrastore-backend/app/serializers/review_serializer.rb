class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :product_id
  belongs_to :product
end
