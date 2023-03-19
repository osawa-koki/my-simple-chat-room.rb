Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  match '/greet', to: 'greetings#greet', via: [:get, :post, :patch, :put, :delete]
end
