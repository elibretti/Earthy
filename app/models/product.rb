# == Schema Information
#
# Table name: products
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :string           not null
#  price       :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ApplicationRecord
    validates :title, :description, :price, :user_id, presence: true
    has_one_attached :photo
    belongs_to :author,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: "User"
    has_many :cart_items,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: "CartItem",
        dependent: :destroy
end
