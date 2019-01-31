Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] 
    resource :session, only: [:create, :destroy]
    get '/products/search', to: 'products#search'
    resources :products, only: [:create, :update, :destroy, :index, :show] do 
      resources :reviews, only: [:create, :update, :destroy, :index]
    end
    resources :cart_items, only: [:create, :update, :destroy, :index]
  end
end
