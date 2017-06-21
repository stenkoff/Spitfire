# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
album_id    | integer   | not null, foreign key (references albums), indexed
ord         | integer   |

## artists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
artist_id   | integer   | not null, foreign key (references artists), indexed

## playlisting
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | not null, foreign key (references tracks), indexed
playlist_id | integer   | not null, foreign key (references artists), indexed
ord         | integer   | not null

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name       | string    | not null
user_id     | integer   | not null, foreign key (references users)

## user_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users)
followed_id | integer   | not null, foreign key (references users)

## playlist_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
playlist_id | integer   | not null, foreign key (references playlists)

<!-- ## artist_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
artist_id   | integer   | not null, foreign key (references artists) -->
