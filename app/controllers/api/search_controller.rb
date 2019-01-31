# class Api::SearchController < ApplicationController
#     def search 
#         search_query = search_params[:query_string].downcase
#         @products = Product.all.select do |product|
#             title = product.title.downcase
#             seller = product.seller.first_name.downcase
#             (title.include?(search_query) || seller.include?(search_query))
#         end

#         render 'api/products'
#     end

#     private
#     def search_params
#         params.require(:query).permit(:query_string)
#     end
# end