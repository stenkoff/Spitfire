# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or create!d alongside the db with db:setup).
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

# User.create(username: 'demo', password: 'password')

chance = Artist.create!(name: 'Chance the Rapper', image: File.open('app/assets/images/chance.png'))
cb = Album.create!(name: 'Coloring Book', artist_id: chance.id, image: File.open('app/assets/images/chance.png'))
Track.create!(title: 'All We Got', album_id: cb.id, ord: 1, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/201/original/01_All_We_Got.m4a')
Track.create!(title: 'No Problem', album_id: cb.id, ord: 2, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/202/original/02_No_Problem.m4a')
Track.create!(title: 'Summer Friends', album_id: cb.id, ord: 3, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/203/original/03_Summer_Friends.m4a')
Track.create!(title: 'D.R.A.M. Sings Special', album_id: cb.id, ord: 4, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/204/original/04_D.R.A.M._Sings_Special.m4a')
Track.create!(title: 'Blessings', album_id: cb.id, ord: 5, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/205/original/05_Blessings.m4a')
Track.create!(title: 'Same Drugs', album_id: cb.id, ord: 6, audio: "https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/229/original/06_Same_Drugs.m4a")
Track.create!(title: 'Mixtape', album_id: cb.id, ord: 7, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/206/original/07_Mixtape.m4a')
Track.create!(title: 'Angels', album_id: cb.id, ord: 8, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/077/original/08_Angels.m4a')
Track.create!(title: 'Juke Jam', album_id: cb.id, ord: 9, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/208/original/09_Juke_Jam.m4a')
Track.create!(title: 'All Night', album_id: cb.id, ord: 10, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/079/original/10_All_Night.m4a')
Track.create!(title: 'How Great', album_id: cb.id, ord: 11, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/080/original/11_How_Great.m4a')
Track.create!(title: 'Smoke Break', album_id: cb.id, ord: 12, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/211/original/12_Smoke_Break.m4a')
Track.create!(title: 'Finish Line Drown', album_id: cb.id, ord: 13, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/212/original/13_Finish_Line_Drown.m4a')
Track.create!(title: 'Blessings', album_id: cb.id, ord: 14, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/213/original/14_Blessings.m4a')
#
kendrick = Artist.create!(name: 'Kendrick Lamar', image: 'https://s3.amazonaws.com/spitfire-dev/Kendrick.jpg')
tpab = Album.create!(name: 'To Pimp A Butterfly', artist_id: kendrick.id, image: 'https://s3.amazonaws.com/spitfire-dev/TPAB.png')
Track.create!(title: "Wesley's Theory", album_id: tpab.id, ord: 1, audio: "https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/228/original/01_Wesley's_Theory.mp3")
Track.create!(title: 'For Free_ (Interlude)', album_id: tpab.id, ord: 2, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/214/original/02_For_Free__(Interlude).mp3')
Track.create!(title: 'King Kunta', album_id: tpab.id, ord: 3, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/215/original/03_King_Kunta.mp3')
Track.create!(title: 'Institutionalized', album_id: tpab.id, ord: 4, audio: "https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/230/original/04_Institutionalized.mp3")
Track.create!(title: 'These Walls', album_id: tpab.id, ord: 5, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/216/original/05_These_Walls.mp3')
Track.create!(title: 'u', album_id: tpab.id, ord: 6, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/217/original/06_u.mp3')
Track.create!(title: 'Alright', album_id: tpab.id, ord: 7, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/218/original/07_Alright.mp3')
Track.create!(title: 'For Sale_ (Interlude)', album_id: tpab.id, ord: 8, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/219/original/08_For_Sale__(Interlude).mp3')
Track.create!(title: 'Momma', album_id: tpab.id, ord: 9, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/220/original/09_Momma.mp3')
Track.create!(title: 'Hood Politics', album_id: tpab.id, ord: 10, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/221/original/10_Hood_Politics.mp3')
Track.create!(title: 'How Much A Dollar Cost', album_id: tpab.id, ord: 11, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/222/original/11_How_Much_A_Dollar_Cost.mp3')
Track.create!(title: 'Complexion (A Zulu Love)', album_id: tpab.id, ord: 12, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/223/original/12_Complexion_(A_Zulu_Love).mp3')
Track.create!(title: 'The Blacker the Berry', album_id: tpab.id, ord: 13, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/224/original/13_The_Blacker_the_Berry.mp3')
Track.create!(title: "You Ain't Gotta Lie (Momma Said)", album_id: tpab.id, ord: 14, audio: "https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/225/original/14_You_Ain't_Gotta_Lie_(Momma_Said).mp3")
Track.create!(title: 'i', album_id: tpab.id, ord: 15, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/226/original/15_i.mp3')
Track.create!(title: 'Mortal Man', album_id: tpab.id, ord: 16, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/227/original/16_Mortal_Man.mp3')
#
# # Album.create!(name: 'DAMN.', artist_id: 20, )
# https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/203/original/03_Summer_Friends.m4a
