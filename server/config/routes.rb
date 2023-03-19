Rails.application.routes.draw do
  get 'user/user'
  get 'hello/hello'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    match '/greet', to: 'greetings#index', via: [:get, :post, :patch, :put, :delete]
    get '/hello/:name', to: 'hello#index'
  end

  get '*path', to: 'static#index'
end
