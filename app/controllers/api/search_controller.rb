class Api::SearchController < ApplicationController
  def index
    if params[:search].present?
      @playlists = Playlist.where('lower(name) LIKE (?)', "%#{params[:search].downcase}%")
      @albums = Album.where('lower(name) LIKE (?)', "%#{params[:search].downcase}%")
      @artists = Artist.where('lower(name) LIKE (?)', "%#{params[:search].downcase}%")
      @tracks = Track.where('lower(title) LIKE (?)', "%#{params[:search].downcase}%")
    else
      @playlists = Playlist.none
      @albums = Album.none
      @artists = Artist.none
      @tracks = Track.none
    end
  end
end
