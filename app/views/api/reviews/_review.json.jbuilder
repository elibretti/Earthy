json.extract! review, :id, :user_id, :product_id, :body, :rating, :created_at
json.user review.user.first_name
json.product review.product.title
if review.user.photo.attached?
    json.userPhoto  url_for(review.user.photo)
end
if review.product.photo.attached?
    json.productPhoto  url_for(review.product.photo)
end