class Api::CartItemsController < ApplicationController

    def index
        @cart_items = CartItem.where(user_id: params[:user_id])
        render :index
    end

    def create
        @cart_item = current_user.cart_items.new(cart_item_params)
        if @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @cart_item = CartItem.find_by(id: params[:id])
        if @cart_item.destroy 
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end  

    end

    def update
        @cart_item = CartItem.find_by(id: params[:id])
        if @cart_item.update(cart_item_params)
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    private
    def cart_item_params
        params.require(:cart_item).permit(:user_id, :product_id, :quantity)
    end


end
