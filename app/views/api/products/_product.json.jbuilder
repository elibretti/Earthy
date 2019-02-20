json.extract! product, :id, :title, :description, :price, :user_id, :seller, :created_at, :category
if product.photo.attached?
    json.photoUrl url_for(product.photo)
end