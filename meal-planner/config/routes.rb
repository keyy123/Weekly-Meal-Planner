Rails.application.routes.draw do
  resources :menus do
    resources :recipes, only: [:index, :update, :destroy, :show]
  end
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  post 'users', to: 'users#create'
  post '/menus/:menu_id/recipes', to: 'recipes#add_to_menu'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
