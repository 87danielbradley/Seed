Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json} do
    resources :users, only: [:create]

    resource :session, only: [:create, :destroy]
    resources :projects, only: [:index, :show, :create, :update, :destroy]
    resources :rewards, only: [:index, :show, :create, :update, :destroy]
    resources :pledges, only: [:index, :show, :create]
  end

  root to: 'static_pages#root'
end
