@cart_items.each do |cart_item|
    json.set! cart_item.id do 
        json.extract! cart_item, :id, :user_id, :product_id, :quantity
        json.price cart_item.product.price
        json.title cart_item.product.title
        json.seller_name cart_item.product.author.first_name
        if(cart_item.product.photo.attached?)
            json.photoUrl url_for(cart_item.product.photo)
        end
    end
end