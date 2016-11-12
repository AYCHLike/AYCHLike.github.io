Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :index, :show]
    resources :questionnaires, only: [:create, :index, :show]
    resources :questions, only: [:create, :index, :show, :destroy]
  end
end
