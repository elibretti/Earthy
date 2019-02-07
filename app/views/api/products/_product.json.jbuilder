json.extract! product, :id, :title, :description, :price, :user_id, :seller, :created_at
if product.photo.attached?
    json.photoUrl url_for(product.photo)
end