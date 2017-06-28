Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :playlists
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resource :session, only: [:create, :destroy]
    resources :playlistings, only: [:create]
    resources :search, only: [:index]
    delete '/playlistings/kill', to: 'playlistings#kill'
  end

  root "static_pages#root"
end
