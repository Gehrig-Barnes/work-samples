Rails.application.routes.draw do
  resources :shifts
  resources :users
  resources :organisations

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  post "/reset", to: "passwords#reset"
  patch "/join/:id", to: "users#join"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
