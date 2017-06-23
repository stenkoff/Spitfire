class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all
    render :index
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  def album_params
    params.require(:album).permit(:name, :artist_id)
  end
end
