Rails.application.routes.draw do
  #routes
  resources :users, only: :create
  resource :sessions, only: [:create, :destroy]
  resources :polls, only: %i[create index show]
  resource :votes, only: :create

  root "home#index"
  get '*path', to: 'home#index', via: :all
end
