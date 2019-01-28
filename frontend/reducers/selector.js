
export const ItemInCart = (state, productId) => {
    let cartItem = null;
    if (state.session.id){
        Object.keys(state.entities.cartItems).forEach( (id) => {
            if(state.entities.cartItems[id].product_id === productId){
                cartItem =  state.entities.cartItems[id];
            }  
        })  
    }
    if(cartItem === null){
        return null;
    }else{
        return cartItem;
    }
}