Rails.application.routes.draw do

  devise_for :users
  
  get '/shop' => 'products#index'
  get '/cart' => 'cart#show'
  get '/cart/clear' => 'cart#clearCart'
  get '/cart/:id' => 'cart#add'
  get '/cart/:id/remove' => 'cart#remove'
  get '/checkout' => 'cart#checkout'

  resources :products
  resources :charges

  root 'static_pages#home'

  get '/about' => 'static_pages#about'

  get '/blog' => 'static_pages#blog'

  get '/classes' => 'static_pages#classes'

  get '/ketogenics' => 'static_pages#ketogenics'

  get '/schedule' => 'static_pages#schedule'

  get '/training' => 'static_pages#training'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
