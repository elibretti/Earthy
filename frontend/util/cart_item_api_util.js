export const createCartItem = (cart_item) => {
    return $.ajax({
        method:"POST",
        url:"api/cart_items",
        data: {cart_item}
    })
}

export const deleteCartItem = (id) => {
    return $.ajax({
        method:"DELETE",
        url:`api/cart_items/${id}`,
    })
}

export const fetchAllCartItems = (userId) => {
    return $.ajax({
        method:"GET",
        url:"api/cart_items",
        data: {user_id: userId}
    })
}

export const updateCartItem = (cart_item) => {
    return $.ajax({
        method:"PATCH",
        url:`api/cart_items/${cart_item.id}`,
        data: {cart_item}
    })
}