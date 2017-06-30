class Api::PlaylistingsController < ApplicationController

  def create
    @playlisting = Playlisting.new(playlisting_params)
    @playlist = Playlist.find(@playlisting.playlist_id)
    if Playlisting.all.
      gth > 0
      @playlisting.ord = Playlisting.last.ord + 1
    else
      @playlisting.ord = 1
    end
    @playlisting.save
    render json: {}
  end

  def destroy
    @playlisting = Playlisting.find(params[:id])
    @playlist = Playlist.find(@playlisting.playlist_id)
    @playlisting.delete
    render "api/playlists/show"
  end

  def kill
    @playlist = Playlist.find(params[:playlist_id].to_i)
    @playlist.playlistings.where(track_id: params[:track_id].to_i).destroy_all
    render "api/playlists/show"
  end

  def playlisting_params
    params.require(:playlisting).permit(:playlist_id, :track_id)
  end
end
