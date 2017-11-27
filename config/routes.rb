Rails.application.routes.draw do

  devise_for :users
  
  get '/shop' => 'products#index'
  get '/cart' => 'carts#show'
  get '/cart/clear' => 'carts#clearCart'
  get '/cart/:id' => 'carts#add'
  get '/cart/:id/remove' => 'carts#remove'
  get '/checkout' => 'carts#checkout'
  post '/checkout' => 'carts#process_payment'

  resources :products, only: [:index, :show]
  resource :cart, only: [:show]
  resources :order_items, only: [:create, :update, :destroy]
  
  root 'static_pages#home'

  get '/about' => 'static_pages#about'

  get '/blog' => 'static_pages#blog'

  get '/classes' => 'static_pages#classes'

  get '/ketogenics' => 'static_pages#ketogenics'

  get '/schedule' => 'static_pages#schedule'

  get '/training' => 'static_pages#training'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
