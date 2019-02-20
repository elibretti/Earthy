class Api::ProductsController < ApplicationController
    def index
        if params[:user_id]
            @products = Product.where(user_id: params[:user_id])
        else
            @products = Product.all
        end
        render :index  
    end

    def show
        @product = Product.find_by(id: params[:id])
        render :show
    end

    def create
        @product = Product.new(product_params)
        if @product.save
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def update
        @product = Product.find_by(id: params[:id])
        if params[:photo]
            @product.photo.purge
        end
        if @product.update(product_params)
            render 'api/products/show'
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def destroy
        @product = Product.find_by(id: params[:id])
        if @product.destroy 
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end  
    end

    def search 
        search_query = params[:query].downcase
        @products = Product.all.select do |product|
            title = product.title.downcase
            seller = product.seller.first_name.downcase
            (title.include?(search_query) || seller.include?(search_query))
        end

        render :index
    end

    def category 
        @products = Product.where(category: category_params[:name])
        render :index
    end

    private 
    def product_params
        params.require(:product).permit(:title, :description, :price, :user_id, :photo, :category)
    end

    def category_params
        params.require(:category).permit(:name)
    end

end
