class Review < ApplicationRecord
    validates :rating, :user_id, :product_id, :body, presence: true
    validates :body, length: {maximum: 300}
    validates :rating, inclusion: {in: (1..5), :message => "must be between 1 and 5"}
    validates :product_id, uniqueness: { scope: :user_id }
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'

    belongs_to :product,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: 'Product'

end
