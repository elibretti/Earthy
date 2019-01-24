json.extract! product, :id, :title, :description, :price, :user_id
if product.photo.attached?
    json.photo url_for(photo.image)
end