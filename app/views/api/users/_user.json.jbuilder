json.extract! user, :id, :email, :first_name
if user.photo.attached?
    json.photo url_for(photo.image)
end