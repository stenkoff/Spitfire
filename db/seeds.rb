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
Track.create!(title: 'D.R.A.M. Sings Special', album_id: cb.id, ord: 4, audio: 'https://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/231/original/04_D.R.A.M._Sings_Special.m4a')
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
kendrick = Artist.create!(name: 'Kendrick Lamar', image: File.open('app/assets/images/kendrick.jpg'))
tpab = Album.create!(name: 'To Pimp A Butterfly', artist_id: kendrick.id, image: File.open('app/assets/images/TPAB.png'))
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

gkmc = Album.create!(name: 'good kid, m.A.A.d city', artist_id: kendrick.id, image: File.open('app/assets/images/good_kid.png'))

Track.create!(title: 'Sherane A.K.A. Master Splinters Daughter', album_id: gkmc.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/232/original/01_-_Sherane_A.K.A._Master_Splinters_Daughter.mp3")
Track.create!(title: 'Bitch, Dant Kill My Vibe', album_id: gkmc.id, ord: 2, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/233/original/02_-_Bitch__Dant_Kill_My_Vibe.mp3")
Track.create!(title: 'Backstreet Freestyle', album_id: gkmc.id, ord: 3, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/234/original/03_-_Backstreet_Freestyle.mp3")
Track.create!(title: 'The Art Of Peer Pressure', album_id: gkmc.id, ord: 4, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/235/original/04_-_The_Art_Of_Peer_Pressure.mp3")
Track.create!(title: 'Money Trees (Feat. Jay Rock)', album_id: gkmc.id, ord: 5, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/236/original/05_-_Money_Trees_%28Feat._Jay_Rock%29.mp3")
Track.create!(title: 'Poetic Justice (Feat. Drake)', album_id: gkmc.id, ord: 6, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/237/original/06_-_Poetic_Justice_%28Feat._Drake%29.mp3")
Track.create!(title: 'Good Kid', album_id: gkmc.id, ord: 7, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/238/original/07_-_Good_Kid.mp3")
Track.create!(title: 'M.A.A.D City (Feat. MC Eiht)', album_id: gkmc.id, ord: 8, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/239/original/08_-_M.A.A.D_City_%28Feat._MC_Eiht%29.mp3")
Track.create!(title: 'Swimming Pools (Drank)', album_id: gkmc.id, ord: 9, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/240/original/09_-_Swimming_Pools_%28Drank%29_%28Extended_Version%29.mp3")
Track.create!(title: 'Sing About Me, Im Dying Of Thirst', album_id: gkmc.id, ord: 10, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/241/original/10_-_Sing_About_Me__Im_Dying_Of_Thirst.mp3")
Track.create!(title: 'Real (Feat. Anna Wise of Sonnymoon)', album_id: gkmc.id, ord: 11, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/242/original/11_-_Real_%28Feat._Anna_Wise_Of_Sonnymoon%29.mp3")
Track.create!(title: 'The Recipe (Feat. Dr Dre)', album_id: gkmc.id, ord: 12, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/243/original/13_-_The_Recipe_%28Feat._Dr_Dre%29_%28Bonus_Track%29.mp3")
Track.create!(title: 'Black Boy Fly (Bonus Track)', album_id: gkmc.id, ord: 13, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/244/original/13_-_The_Recipe_%28Feat._Dr_Dre%29_%28Bonus_Track%29.mp3")
Track.create!(title: 'Now Or Never (Feat. Mary J. Blige)', album_id: gkmc.id, ord: 14, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/245/original/15_-_Now_Or_Never_%28Feat._Mary_J._Blige%29_%28Bonus_Track%29.mp3")

damn = Album.create!(name: 'DAMN.', artist_id: kendrick.id, image: File.open('app/assets/images/damn.png'))

Track.create!(title: 'BLOOD.', album_id: damn.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/246/original/01_BLOOD..mp3")
Track.create!(title: 'DNA.', album_id: damn.id, ord: 2, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/247/original/02_DNA..mp3")
Track.create!(title: 'YAH.', album_id: damn.id, ord: 3, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/247/original/02_DNA..mp3")
Track.create!(title: 'ELEMENT.', album_id: damn.id, ord: 4, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/249/original/04_ELEMENT..mp3")
Track.create!(title: 'FEEL.', album_id: damn.id, ord: 5, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/250/original/05_FEEL..mp3")
Track.create!(title: 'LOYALTY. (FEAT. RIHANNA.)', album_id: damn.id, ord: 6, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/251/original/06_LOYALTY._%28FEAT._RIHANNA.%29.mp3")
Track.create!(title: 'PRIDE.', album_id: damn.id, ord: 7, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/252/original/07_PRIDE..mp3")
Track.create!(title: 'HUMBLE.', album_id: damn.id, ord: 8, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/253/original/08_HUMBLE..mp3")
Track.create!(title: 'LUST.', album_id: damn.id, ord: 9, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/254/original/09_LUST..mp3")
Track.create!(title: 'LOVE. (FEAT. ZACARI.)', album_id: damn.id, ord: 10, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/255/original/10_LOVE._%28FEAT._ZACARI.%29.mp3")
Track.create!(title: 'XXX. (FEAT. U2.)', album_id: damn.id, ord: 11, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/256/original/11_XXX._%28FEAT._U2.%29.mp3")
Track.create!(title: 'FEAR.', album_id: damn.id, ord: 12, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/257/original/12_FEAR..mp3")
Track.create!(title: 'GOD.', album_id: damn.id, ord: 13, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/258/original/13_GOD..mp3")
Track.create!(title: 'DUCKWORTH.', album_id: damn.id, ord: 14, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/259/original/14_DUCKWORTH..mp3")

outkast = Artist.create!(name: 'Outkast', image: File.open('app/assets/images/outkast.jpg'))
stankonia = Album.create!(name: 'stankonia', artist_id: outkast.id, image: File.open('app/assets/images/stankonia.png'))
spkrbox = Album.create!(name: 'Speakerboxxx/The Love Below', artist_id: 25, image: File.open('app/assets/images/speakerbox:the love below.png'))

Track.create!(title: 'Ms. Jackson', album_id: stankonia.id, ord: 1, audio:  "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/260/original/1-05_Ms._Jackson.mp3")
Track.create!(title: 'Roses', album_id: spkrbox.id, ord: 2, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/260/original/1-05_Ms._Jackson.mp3")
Track.create!(title: 'Hey Ya!', album_id: spkrbox.id, ord: 3, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/263/original/02_Hey_Ya!.m4a")


wiz = Artist.create!(name: 'Wiz Khalifa', image: File.open('app/assets/images/wiz.jpg'))
rolling = Album.create!(name: 'Rolling Papers', artist_id: wiz.id, image: File.open('app/assets/images/Rolling Papers.png'))
Track.create!(title: 'Black and Yellow', album_id: rolling.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/263/original/02_Hey_Ya!.m4a")

cudi = Artist.create!(name: 'Kid Cudi', image: File.open('app/assets/images/kid-cudi-1.jpg'))
moon = Album.create!(name: 'Man On The Moon', artist_id: cudi.id, image: File.open('app/assets/images/moon.jpg'))
Track.create!(title: 'Up Up & Away', album_id: moon.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/265/original/up_up_and_away.mp3")
Track.create!(title: 'Pursuit of Happiness (Nightmare)', album_id: moon.id, ord: 2, audio:  "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/265/original/up_up_and_away.mp3")

future = Artist.create!(name: 'Future', image: File.open('app/assets/images/future2.jpg'))
mask = Album.create!(name: 'FUTURE', artist_id: future.id, image: File.open('app/assets/images/FUTURE.png'))
Track.create!(title: 'Mask Off', album_id: mask.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/267/original/07_Mask_Off.mp3")
evol = Album.create!(name: 'EVOL', artist_id: future.id, image: File.open('app/assets/images/evol.png'))
Track.create!(title: 'Low Life', album_id: evol.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/268/original/10_Low_Life.mp3")

travis = Artist.create!(name: 'Travis Scott', image: File.open('app/assets/images/travis.jpg'))
birds = Album.create!(name: 'Birds in the Trap Sings McKnight', artist_id: travis.id, image: File.open('app/assets/images/birds.png'))
Track.create!(title: 'Goosebumps', album_id: birds.id, ord: 2, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/276/original/09_goosebumps.mp3")

paak = Artist.create!(name: 'Anderson .Paak', image: File.open('app/assets/images/paak.jpg'))
malibu = Album.create!(name: 'Malibu', artist_id: paak.id, image: File.open('app/assets/images/malibu.jpg'))
Track.create!(title: 'The Season/Carry Me', album_id: malibu.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/270/original/01_The_Season_Carry_Me_%28Explicit%29.mp3")

ten = Album.create!(name: '10 Day', artist_id: chance.id, image: File.open('app/assets/images/10day.jpg'))
Track.create!(title: '14400 Minutes', album_id: ten.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/271/original/01_-_14400_Minutes__prod_by_DJ_SuchNSuch_.mp3")
Track.create!(title: 'Nostalgia', album_id: ten.id, ord: 2, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/272/original/02_-_Nostalgia.mp3")
Track.create!(title: 'Missing You', album_id: ten.id, ord: 3, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/273/original/03_-_Missing_You__prod_by_Thomas_Foolery_.mp3")
Track.create!(title: 'Windows', album_id: ten.id, ord: 4, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/274/original/04_-_Windows_%28Ft_Alex_Wiley_and_Akenya_Seymour%29.mp3")
Track.create!(title: 'Brain Cells', album_id: ten.id, ord: 5, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/275/original/05_-_Brain_Cells__prod_by_Peter_Cottontale_.mp3")
Track.create!(title: 'Long Time', album_id: ten.id, ord: 6, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/277/original/06_-_Long_Time.mp3")
Track.create!(title: '22 Offs', album_id: ten.id, ord: 7, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/278/original/07_-_22_Offs.mp3")
