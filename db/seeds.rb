# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# create_table "tracks", force: :cascade do |t|
#   t.string   "title",      null: false
#   t.integer  "album_id",   null: false
#   t.integer  "ord",        null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end
Track.destroy_all
Artist.destroy_all
Album.destroy_all
Playlist.destroy_all
Playlisting.destroy_all


chance = Artist.create(name: 'Chance the Rapper', image: File.open('app/assets/images/chance.png'))
cb = Album.create(name: 'Coloring Book', artist_id: chance.id, image: File.open('app/assets/images/chance.png'))
Track.create(title: 'All We Got', album_id: cb.id, ord: 1, audio: File.open('app/assets/tracks/01_All_We_Got.m4a'))
Track.create(title: 'No Problem', album_id: cb.id, ord: 2, audio: File.open('app/assets/tracks/02_No_Problem.m4a'))
Track.create(title: 'Summer Friends', album_id: cb.id, ord: 3, audio: File.open('app/assets/tracks/03_Summer_Friends.m4a'))
Track.create(title: 'D.R.A.M. Sings Special', album_id: cb.id, ord: 4, audio: File.open('app/assets/tracks/04_D.R.A.M._Sings_Special.m4a'))
Track.create(title: 'Blessings', album_id: cb.id, ord: 5, audio: File.open('app/assets/tracks/05_Blessings.m4a'))
Track.create(title: 'Same Drugs', album_id: cb.id, ord: 6, audio: File.open('app/assets/tracks/06_Same_Drugs.m4a'))
Track.create(title: 'Mixtape', album_id: cb.id, ord: 7, audio: File.open('app/assets/tracks/07_Mixtape.m4a'))
Track.create(title: 'Angels', album_id: cb.id, ord: 8, audio: File.open('app/assets/tracks/08_Angels.m4a'))
Track.create(title: 'Juke Jam', album_id: cb.id, ord: 9, audio: File.open('app/assets/tracks/09_Juke_Jam.m4a'))
Track.create(title: 'All Night', album_id: cb.id, ord: 10, audio: File.open('app/assets/tracks/10_All_Night.m4a'))
Track.create(title: 'How Great', album_id: cb.id, ord: 11, audio: File.open('app/assets/tracks/11_How_Great.m4a'))
Track.create(title: 'Smoke Break', album_id: cb.id, ord: 12, audio: File.open('app/assets/tracks/12_Smoke_Break.m4a'))
Track.create(title: 'Finish Line Drown', album_id: cb.id, ord: 13, audio: File.open('app/assets/tracks/13_Finish_Line_Drown.m4a'))
Track.create(title: 'Blessings', album_id: cb.id, ord: 14, audio: File.open('app/assets/tracks/14_Blessings.m4a'))
