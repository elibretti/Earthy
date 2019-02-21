json.extract! review, :id, :user_id, :product_id, :body, :rating, :created_at
json.extract! review.user, :first_name
if review.user.photo.attached?
    json.userPhoto  url_for(review.user.photo)
end
if review.product.photo.attached?
    json.userPhoto  url_for(review.product.photo)
end