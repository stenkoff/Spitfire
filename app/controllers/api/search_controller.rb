class Api::SearchController < ApplicationController
  def index
    if params[:search].present?
      @playlists = Playlist.where('lower(name) LIKE (?)', "%#{params[:search].downcase}%")
      @albums = Album.where('lower(name) LIKE (?)', "%#{params[:search].downcase}%").includes(:artist)
      @artists = Artist.where('lower(name) LIKE (?)', "%#{params[:search].downcase}%").includes(:albums)
      @tracks = Track.where('lower(title) LIKE (?)', "%#{params[:search].downcase}%").includes(:album, :artist)
    else
      @playlists = Playlist.none
      @albums = Album.none
      @artists = Artist.none
      @tracks = Track.none
    end
  end
end
