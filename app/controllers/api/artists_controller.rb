class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
    render :index
  end

  def show
    @artist = Artist.find(params[:id])
    render :show
  end

  def artist_params
    params.require(:artist).permit(:name)
  end
end
