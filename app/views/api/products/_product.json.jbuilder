json.extract! product, :id, :title, :description, :price, :user_id, :seller
if product.photo.attached?
    json.photoUrl url_for(product.photo)
end