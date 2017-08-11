class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all.includes(:albums)
    @albums = Album.all.includes(:artist)
    render :index
  end

  def show
    @artist = Artist.includes(:albums, :tracks).find(params[:id])
    render :show
  end

  def artist_params
    params.require(:artist).permit(:name)
  end
end
