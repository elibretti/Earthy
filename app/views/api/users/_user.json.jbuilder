json.extract! user, :id, :email, :first_name
if user.photo.attached?
    json.photoUrl url_for(user.photo)
end