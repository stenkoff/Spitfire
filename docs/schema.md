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
track_url   | string    | not null
artist_id   | integer   | not null, foreign key (references artists), indexed
album_id    | integer   | not null, foreign key (references albums), indexed

## artists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
image_url   | string    | not null

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
artist_id   | integer   | not null, foreign key (references artists), indexed
image_url   | string    | not null

## playlisting
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | not null, foreign key (references tracks), indexed
playlist_id | integer   | not null, foreign key (references artists), indexed

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
user_id     | integer   | not null, foreign key (references users)
image_url   | string    | not null
