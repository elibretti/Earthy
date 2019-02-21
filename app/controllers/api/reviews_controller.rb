class Api::ReviewsController < ApplicationController
    def index
        if params[:product_id]
            @reviews = Review.where(product_id: params[:product_id])
        else
            @reviews = Review.all
        end
        render :index
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review.destroy
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private
    def review_params
        params.require(:review).permit(:user_id, :product_id, :body, :rating)
    end
end