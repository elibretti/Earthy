Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show] 
    resource :session, only: [:create, :destroy]
    get '/products/search', to: 'products#search'
    get '/products/category', to: 'products#category'
    resources :products, only: [:create, :update, :destroy, :index, :show] do 
      resources :reviews, only: [:create, :update, :destroy, :index]
    end
    resources :cart_items, only: [:create, :update, :destroy, :index]
    resources :reviews, only: [:index]
  end
end
