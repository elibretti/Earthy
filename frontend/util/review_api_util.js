export const createReview = (review) => {
    return $.ajax({
        method:"POST",
        url: `api/products/${review.product_id}/reviews`,
        data: {review}
    })
}

export const fetchProductReviews = (product_id) => {
    return $.ajax({
        method:"GET",
        url: `api/products/${product_id}/reviews`
    })
}
export const fetchAllReviews = () => {
    return $.ajax({
        method:"GET",
        url: `api/reviews`
    })
}

export const deleteReview = (review) => {
    return $.ajax({
        method:"DELETE",
        url:`api/products/${review.product_id}/reviews/${review.id}`
    })
}

export const updateReview = (review) => {
    return $.ajax({
        method:"PATCH",
        url:`api/products/${review.product_id}/reviews/${review.id}`,
        data: {review}
    })
}