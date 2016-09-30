Rails.application.routes.draw do
  get '/shop' => 'shop#index'

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
