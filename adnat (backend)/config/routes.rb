Rails.application.routes.draw do
  resources :shifts
  resources :organisations
  resources :users
  
  get "/me", to: "users#show"

  post "/signup", to: "users#create"
  post "/reset", to: "passwords#reset"
  post "/login", to: "sessions#login"

  delete "/delete_org/:id", to: "organisations#delete_org"
  delete "/logout", to: "sessions#logout"

  patch "/join/:id", to: "users#join"
  patch "/leave_org/:id", to: "users#leave_org"
 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
