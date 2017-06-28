class Api::SearchController < ApplicationController
  def index
    if params[:search].present?
      @playlists = Playlist.where('lower(name) LIKE (?)', "%#{params[:search].downcase}%")
      @albums = Album.where('lower(name) LIKE (?)', "%#{params[:search].downcase}%")
      @artists = Artist.where('lower(name) LIKE (?)', "%#{params[:search].downcase}%")
      @tracks = Track.where('lower(title) LIKE (?)', "%#{params[:search].downcase}%")
      # @playlists = Playlist.where('name ~ ?', params[:search])
      # @albums = Album.where('name ~ ?', params[:search])
      # @artists = Artist.where('name ~ ?', params[:search])
      # @tracks = Track.where('title ~ ?', params[:search])
    else
      @playlists = Playlist.none
      @albums = Album.none
      @artists = Artist.none
      @tracks = Track.none
    end
  end
end
