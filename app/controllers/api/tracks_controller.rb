class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render :index
  end

  # def track_params
  #   params.require(:track).permit(:title, :album_id, :ord)
  # end
end
