module UsersHelper
    def average_rating(reviews)
        if(reviews.length == 0)
            return nil
        else
           reviews_sum = 0; 
           reviews.each do |review|
                reviews_sum += review.rating
           end
           return (reviews_sum / reviews.length)
        end
    end
end