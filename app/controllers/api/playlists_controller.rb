class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
    render :index
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.delete
    @playlists = Playlist.all
    render :index
  end

  def playlist_params
    params.require(:playlist).permit(:user_id, :name)
  end
end
