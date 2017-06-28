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

User.create(username: 'demo', password: 'password')

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

kendrick = Artist.create(name: 'Kendrick Lamar', image: File.open('app/assets/images/kendrick.jpg'))
tpab = Album.create(name: 'To Pimp A Butterfly', artist_id: kendrick.id, image: File.open('app/assets/images/to_pimp_a_butterfly.png'))
Track.create(title: "Wesley's Theory", album_id: tpab.id, ord: 1, audio: File.open("app/assets/tracks/tpab/01_Wesley's Theory.mp3"))
Track.create(title: 'For Free_ (Interlude)', album_id: tpab.id, ord: 2, audio: File.open("app/assets/tracks/tpab/02_For Free_ (Interlude).mp3"))
Track.create(title: 'King Kunta', album_id: tpab.id, ord: 3, audio: File.open('app/assets/tracks/tpab/03_King Kunta.mp3'))
Track.create(title: 'Institutionalized', album_id: tpab.id, ord: 4, audio: File.open('app/assets/tracks/tpab/04_Institutionalized.mp3'))
Track.create(title: 'These Walls', album_id: tpab.id, ord: 5, audio: File.open('app/assets/tracks/tpab/05_These Walls.mp3'))
Track.create(title: 'u', album_id: tpab.id, ord: 6, audio: File.open('app/assets/tracks/tpab/06_u.mp3'))
Track.create(title: 'Alright', album_id: tpab.id, ord: 7, audio: File.open('app/assets/tracks/tpab/07_Alright.mp3'))
Track.create(title: 'For Sale_ (Interlude)', album_id: tpab.id, ord: 8, audio: File.open('app/assets/tracks/tpab/08_For Sale_ (Interlude).mp3'))
Track.create(title: 'Momma', album_id: tpab.id, ord: 9, audio: File.open('app/assets/tracks/tpab/09_Momma.mp3'))
Track.create(title: 'Hood Politics', album_id: tpab.id, ord: 10, audio: File.open('app/assets/tracks/tpab/10_Hood Politics.mp3'))
Track.create(title: 'How Much A Dollar Cost', album_id: tpab.id, ord: 11, audio: File.open('app/assets/tracks/tpab/11_How Much A Dollar Cost.mp3'))
Track.create(title: 'Complexion (A Zulu Love)', album_id: tpab.id, ord: 12, audio: File.open('app/assets/tracks/tpab/12_Complexion (A Zulu Love).mp3'))
Track.create(title: 'The Blacker the Berry', album_id: tpab.id, ord: 13, audio: File.open('app/assets/tracks/tpab/13_The Blacker the Berry.mp3'))
Track.create(title: "You Ain't Gotta Lie (Momma Said)", album_id: tpab.id, ord: 14, audio: File.open("app/assets/tracks/tpab/14_You Ain't Gotta Lie (Momma Said).mp3"))
Track.create(title: 'i', album_id: tpab.id, ord: 15, audio: File.open('app/assets/tracks/tpab/15_i.mp3'))
Track.create(title: 'Mortal Man', album_id: tpab.id, ord: 16, audio: File.open('app/assets/tracks/tpab/16_Mortal Man.mp3'))

# Album.create(name: 'DAMN.', artist_id: 20, )
