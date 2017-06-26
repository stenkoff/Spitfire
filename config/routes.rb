Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :playlists
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resource :session, only: [:create, :destroy]
    resource :playlisting, only: [:create, :destroy]
  end

  root "static_pages#root"
end
