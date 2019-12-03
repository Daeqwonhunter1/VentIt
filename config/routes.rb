Rails.application.routes.draw do
  resources :subvents do
    resources :posts do
      resources :comments
    end
  end

  post '/login', to: 'authentication#login'
  get '/verify', to: 'authentication#verify'
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
  
end