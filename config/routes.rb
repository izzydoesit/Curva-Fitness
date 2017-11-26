Rails.application.routes.draw do

  get 'order_items/create'

  get 'order_items/update'

  get 'order_items/destroy'

  devise_for :users
  
  get '/shop' => 'products#index'
  get '/cart' => 'cart#show'
  get '/cart/clear' => 'cart#clearCart'
  get '/cart/:id' => 'cart#add'
  get '/cart/:id/remove' => 'cart#remove'
  get '/checkout' => 'cart#checkout'
  post '/checkout' => 'cart#process_payment'

  resources :products

  root 'static_pages#home'

  get '/about' => 'static_pages#about'

  get '/blog' => 'static_pages#blog'

  get '/classes' => 'static_pages#classes'

  get '/ketogenics' => 'static_pages#ketogenics'

  get '/schedule' => 'static_pages#schedule'

  get '/training' => 'static_pages#training'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
