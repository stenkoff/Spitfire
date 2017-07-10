# Spitfire

Spitfire is a full stack music-streaming application inspired by the popular web application, Spotify. Spitfire implements Ruby on Rails backend, PostgreSQL database and React/Redux on the frontend.

# Features and Implementation

## Asynchronous Music Playback
![alt text](../app/assets/images/playbar.png)

Users can play music continuously while navigating throughout the site. Continuous playback is achieved by making the audioplayer a top level component, so as users browse the site, the audioplayer is rendered on every page and the stream of music is never disrupted. The audioplayer displays the progress of the current song by setting the width of the bar equal to percentage of song's progress. This progress is calculated using the current time of the song and the total duration of the song. Users can play a single song or add multiple songs to a queue, and they can navigate forward and backwards through the queue. Additionally, users can adjust the volume of the audioplayer by clicking on the volume bar.

## Search
![alt text](../app/assets/images/search.png)

Users can search for playlists, artists, albums and songs. Search results are displayed and updated immediately, as a user types. On every keystroke, an onChange event handler sends an API request to the backend, which uses an ActiveRecord query to check the database for case-insensitive matches in any of the four categories, and immediately returns the results to the frontend.

<!-- Playlist Creation
Users can create playlists, which are displayed in their music. They can add or remove tracks from the playlists, or delete the playlist entirely. -->
