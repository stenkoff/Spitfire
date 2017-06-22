class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
    render :index
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def playlist_params
    params.require(:playlist).permit(:user_id, :name)
  end
end
