Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: :create
    resources :questionnaires, only: [:create, :index, :show]
    resources :questions, only: :create
    resources :responses, only: :create
  end
end
