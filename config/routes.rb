Rails.application.routes.draw do
  devise_for :users
  get '/shop' => 'shop#index'
  get '/shop/clear' => 'shop#clearCart'
  get '/shop/:id' => 'shop#add'

  resources :products

  root 'static_pages#home'

  get 'static_pages/about'

  get 'static_pages/blog'

  get 'static_pages/classes'

  get 'static_pages/ketogenics'

  get 'static_pages/schedule'

  get 'static_pages/shop'

  get 'static_pages/training'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
