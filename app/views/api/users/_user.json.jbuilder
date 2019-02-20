json.extract! user, :id, :email, :first_name, :gender, :birth_month, :birth_date, :about, :city
if user.photo.attached?
    json.photoUrl url_for(user.photo)
end
json.averageReview average_rating(user.reviews)
json.numReviews user.reviews.length