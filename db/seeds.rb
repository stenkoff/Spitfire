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
#
chance = Artist.create!(name: 'Chance the Rapper', image: File.open('app/assets/images/chance.png'))
cb = Album.create!(name: 'Coloring Book', artist_id: chance.id, image: File.open('app/assets/images/chance.png'))
Track.create!(title: 'All We Got', album_id: cb.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/351/original/01_All_We_Got_%28feat._Kanye_West___Chicago_Children's_Choir%29.m4a")
Track.create!(title: 'No Problem', album_id: cb.id, ord: 2, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios//original/02_No_Problem_%28feat._Lil_Wayne___2_Chainz%29.m4a?1500521812")
Track.create!(title: 'Summer Friends', album_id: cb.id, ord: 3, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/294/original/03_Summer_Friends_%28feat._Jeremih___Francis___The_Lights%29.m4a")
Track.create!(title: 'D.R.A.M. Sings Special', album_id: cb.id, ord: 4, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/295/original/04_D.R.A.M._Sings_Special.m4a")
Track.create!(title: 'Blessings', album_id: cb.id, ord: 5, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/296/original/05_Blessings.m4a")
Track.create!(title: 'Same Drugs', album_id: cb.id, ord: 6, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/297/original/06_Same_Drugs.m4a")
Track.create!(title: 'Mixtape', album_id: cb.id, ord: 7, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/298/original/07_Mixtape_%28feat._Young_Thug___Lil_Yachty%29.m4a")
Track.create!(title: 'Angels', album_id: cb.id, ord: 8, audio: 'http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/299/original/08_Angels_%28feat._Saba%29.m4a')
Track.create!(title: 'Juke Jam', album_id: cb.id, ord: 9, audio: 'http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/300/original/09_Juke_Jam_%28feat._Justin_Bieber___Towkio%29.m4a')
Track.create!(title: 'All Night', album_id: cb.id, ord: 10, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/301/original/10_All_Night_%28feat._Knox_Fortune%29.m4a")
Track.create!(title: 'How Great', album_id: cb.id, ord: 11, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/302/original/11_How_Great_%28feat._Jay_Electronica___My_cousin_Nicole%29.m4a")
Track.create!(title: 'Smoke Break', album_id: cb.id, ord: 12, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/303/original/12_Smoke_Break_%28feat._Future%29.m4a")
Track.create!(title: 'Finish Line Drown', album_id: cb.id, ord: 13, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/304/original/13_Finish_Line___Drown_%28feat._T-Pain__Kirk_Franklin__Eryn_Allen_Kane___Noname%29.m4a")
# #
kendrick = Artist.create!(name: 'Kendrick Lamar', image: File.open('app/assets/images/kendrick.jpg'))
tpab = Album.create!(name: 'To Pimp A Butterfly', artist_id: kendrick.id, image: File.open('app/assets/images/TPAB.png'))
Track.create!(title: "Wesley's Theory", album_id: tpab.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/305/original/01_-_Wesley's_Theory.mp3")
Track.create!(title: 'For Free_ (Interlude)', album_id: tpab.id, ord: 2, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/306/original/02_-_For_Free__%28Interlude%29.mp3")
Track.create!(title: 'King Kunta', album_id: tpab.id, ord: 3, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/280/original/03_-_King_Kunta.mp3?1498835881")
Track.create!(title: 'Institutionalized', album_id: tpab.id, ord: 4, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/307/original/04_-_Institutionalized.mp3")
Track.create!(title: 'These Walls', album_id: tpab.id, ord: 5, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/308/original/05_-_These_Walls.mp3")
Track.create!(title: 'u', album_id: tpab.id, ord: 6, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/309/original/06_-_u.mp3")
Track.create!(title: 'Alright', album_id: tpab.id, ord: 7, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/310/original/07_-_Alright.mp3")
Track.create!(title: 'For Sale_ (Interlude)', album_id: tpab.id, ord: 8, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/311/original/08_-_For_Sale__%28Interlude%29.mp3")
Track.create!(title: 'Momma', album_id: tpab.id, ord: 9, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/312/original/09_-_Momma.mp3")
Track.create!(title: 'Hood Politics', album_id: tpab.id, ord: 10, audio: File.open("app/assets/tracks/To Pimp A Butterfly/10 - Hood Politics.mp3"))
Track.create!(title: 'How Much A Dollar Cost', album_id: tpab.id, ord: 11, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/313/original/10_-_Hood_Politics.mp3")
Track.create!(title: 'Complexion (A Zulu Love)', album_id: tpab.id, ord: 12, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/314/original/12_-_Complexion_%28A_Zulu_Love%29.mp3")
Track.create!(title: 'The Blacker the Berry', album_id: tpab.id, ord: 13, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/315/original/13_-_The_Blacker_the_Berry.mp3")
Track.create!(title: "You Ain't Gotta Lie (Momma Said)", album_id: tpab.id, ord: 14, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/316/original/14_-_You_Ain't_Gotta_Lie_%28Momma_Said%29.mp3")
Track.create!(title: 'i', album_id: tpab.id, ord: 15, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/317/original/15_-_i.mp3")
Track.create!(title: 'Mortal Man', album_id: tpab.id, ord: 16, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/318/original/16_-_Mortal_Man.mp3")
#
gkmc = Album.create!(name: 'good kid, m.A.A.d city', artist_id: kendrick.id, image: File.open('app/assets/images/good_kid.png'))
#
Track.create!(title: 'Sherane A.K.A. Master Splinters Daughter', album_id: gkmc.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/281/original/01_-_Sherane_A.K.A._Master_Splinters_Daughter.mp3?1498836070")
Track.create!(title: 'Bitch, Dant Kill My Vibe', album_id: gkmc.id, ord: 2, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/319/original/02_-_Bitch__Dant_Kill_My_Vibe.mp3")
Track.create!(title: 'Backstreet Freestyle', album_id: gkmc.id, ord: 3, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/320/original/03_-_Backstreet_Freestyle.mp3")
Track.create!(title: 'The Art Of Peer Pressure', album_id: gkmc.id, ord: 4, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/321/original/04_-_The_Art_Of_Peer_Pressure.mp3")
Track.create!(title: 'Money Trees (Feat. Jay Rock)', album_id: gkmc.id, ord: 5, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/322/original/05_-_Money_Trees_%28Feat._Jay_Rock%29.mp3")
Track.create!(title: 'Poetic Justice (Feat. Drake)', album_id: gkmc.id, ord: 6, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/323/original/06_-_Poetic_Justice_%28Feat._Drake%29.mp3")
Track.create!(title: 'Good Kid', album_id: gkmc.id, ord: 7, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/324/original/07_-_Good_Kid.mp3")
Track.create!(title: 'M.A.A.D City (Feat. MC Eiht)', album_id: gkmc.id, ord: 8, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/325/original/08_-_M.A.A.D_City_%28Feat._MC_Eiht%29.mp3")
Track.create!(title: 'Swimming Pools (Drank)', album_id: gkmc.id, ord: 9, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/326/original/09_-_Swimming_Pools_%28Drank%29_%28Extended_Version%29.mp3")
Track.create!(title: 'Sing About Me, Im Dying Of Thirst', album_id: gkmc.id, ord: 10, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/327/original/10_-_Sing_About_Me__Im_Dying_Of_Thirst.mp3")
Track.create!(title: 'Real (Feat. Anna Wise of Sonnymoon)', album_id: gkmc.id, ord: 11, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/328/original/11_-_Real_%28Feat._Anna_Wise_Of_Sonnymoon%29.mp3")

Track.create!(title: 'Complexion (A Zulu Love)', album_id: gkmc.id, ord: 12, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/329/original/12_-_Complexion_%28A_Zulu_Love%29.mp3")
Track.create!(title: 'The Recipe (Feat. Dr. Dre)', album_id: gkmc.id, ord: 13, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/330/original/13_-_The_Recipe_%28Feat._Dr_Dre%29_%28Bonus_Track%29.mp3?1500524745")
Track.create!(title: 'Black Boy Fly (Bonus Track)', album_id: gkmc.id, ord: 14, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/331/original/14_-_Black_Boy_Fly_%28Bonus_Track%29.mp3")
Track.create!(title: 'Now Or Never (Feat. Mary J. Blige)', album_id: gkmc.id, ord: 15, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/332/original/15_-_Now_Or_Never_%28Feat._Mary_J._Blige%29_%28Bonus_Track%29.mp3")
#
damn = Album.create!(name: 'DAMN.', artist_id: kendrick.id, image: File.open('app/assets/images/damn.png'))
#
Track.create!(title: 'BLOOD.', album_id: damn.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/282/original/01_BLOOD..mp3?1498836204")
Track.create!(title: 'DNA.', album_id: damn.id, ord: 2, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/333/original/02_DNA..mp3")
Track.create!(title: 'YAH.', album_id: damn.id, ord: 3, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/334/original/03_YAH..mp3")
Track.create!(title: 'ELEMENT.', album_id: damn.id, ord: 4, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/335/original/04_ELEMENT..mp3")
Track.create!(title: 'FEEL.', album_id: damn.id, ord: 5, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/336/original/05_FEEL..mp3")
Track.create!(title: 'LOYALTY. (FEAT. RIHANNA.)', album_id: damn.id, ord: 6, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/337/original/06_LOYALTY._%28FEAT._RIHANNA.%29.mp3")
Track.create!(title: 'PRIDE.', album_id: damn.id, ord: 7, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/338/original/07_PRIDE..mp3")
Track.create!(title: 'HUMBLE.', album_id: damn.id, ord: 8, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/339/original/08_HUMBLE..mp3")
Track.create!(title: 'LUST.', album_id: damn.id, ord: 9, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/340/original/09_LUST..mp3")
Track.create!(title: 'LOVE. (FEAT. ZACARI.)', album_id: damn.id, ord: 10, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/341/original/10_LOVE._%28FEAT._ZACARI.%29.mp3")
Track.create!(title: 'XXX. (FEAT. U2.)', album_id: damn.id, ord: 11, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/342/original/11_XXX._%28FEAT._U2.%29.mp3")
Track.create!(title: 'FEAR.', album_id: damn.id, ord: 12, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/343/original/12_FEAR..mp3?1500529019")
Track.create!(title: 'GOD.', album_id: damn.id, ord: 13, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/344/original/13_GOD..mp3")
Track.create!(title: 'DUCKWORTH.', album_id: damn.id, ord: 14, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/345/original/14_DUCKWORTH..mp3")
#
outkast = Artist.create!(name: 'Outkast', image: File.open('app/assets/images/outkast.jpg'))
stankonia = Album.create!(name: 'Stankonia', artist_id: outkast.id, image: File.open('app/assets/images/stankonia.png'))
spkrbox = Album.create!(name: 'Speakerboxxx/The Love Below', artist_id: outkast.id, image: File.open('app/assets/images/speakerbox:the love below.png'))
#
Track.create!(title: 'Ms. Jackson', album_id: stankonia.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/283/original/1-05_Ms._Jackson.mp3?1498836398")
Track.create!(title: 'Roses', album_id: spkrbox.id, ord: 2, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/284/original/1-10_Roses.mp3?1498836453")
Track.create!(title: 'Hey Ya!', album_id: spkrbox.id, ord: 3, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/285/original/02_Hey_Ya!.m4a?1498836495")
#
#
wiz = Artist.create!(name: 'Wiz Khalifa', image: File.open('app/assets/images/wiz.jpg'))
rolling = Album.create!(name: 'Rolling Papers', artist_id: wiz.id, image: File.open('app/assets/images/Rolling Papers.png'))
Track.create!(title: 'Black and Yellow', album_id: rolling.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/285/original/02_Hey_Ya!.m4a?1498836495")
#
cudi = Artist.create!(name: 'Kid Cudi', image: File.open('app/assets/images/kid-cudi-1.jpg'))
moon = Album.create!(name: 'Man On The Moon', artist_id: cudi.id, image: File.open('app/assets/images/moon.jpg'))
Track.create!(title: 'Up Up & Away', album_id: moon.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/287/original/Up_Up___Away.mp3?1498836748")
# Track.create!(title: 'Pursuit of Happiness (Nightmare)', album_id: moon.id, ord: 2, audio:  File.open(""))
#
future = Artist.create!(name: 'Future', image: File.open('app/assets/images/future2.jpg'))
mask = Album.create!(name: 'FUTURE', artist_id: future.id, image: File.open('app/assets/images/FUTURE.png'))
Track.create!(title: 'Mask Off', album_id: mask.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/288/original/07_Mask_Off.mp3?1498836945")

evol = Album.create!(name: 'EVOL', artist_id: future.id, image: File.open("app/assets/images/evol.png"))
Track.create!(title: 'Low Life', album_id: evol.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/289/original/Future_EVOL_LowLife_10.mp3")
#
travis = Artist.create!(name: 'Travis Scott', image: File.open('app/assets/images/travis.jpg'))
birds = Album.create!(name: 'Birds in the Trap Sings McKnight', artist_id: travis.id, image: File.open('app/assets/images/birds.png'))
Track.create!(title: 'Goosebumps', album_id: birds.id, ord: 2, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/292/original/09_goosebumps.mp3?1498838266")
#
paak = Artist.create!(name: 'Anderson .Paak', image: File.open('app/assets/images/paak.jpg'))
malibu = Album.create!(name: 'Malibu', artist_id: paak.id, image: File.open('app/assets/images/malibu.jpg'))
Track.create!(title: 'The Season/Carry Me', album_id: malibu.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/290/original/AndersonPaak_TheSeasonCarryMeExplicit_885150341452_1_1.mp3?1498837381")
#
ten = Album.create!(name: '10 Day', artist_id: chance.id, image: File.open('app/assets/images/10day.jpg'))
Track.create!(title: '14400 Minutes', album_id: ten.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/291/original/01_14_400_Minutes__prod._by_DJ_SuchNSuch_.mp3?1498837512")
# Track.create!(title: 'Nostalgia', album_id: ten.id, ord: 2, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/272/original/02_-_Nostalgia.mp3")
# Track.create!(title: 'Missing You', album_id: ten.id, ord: 3, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/273/original/03_-_Missing_You__prod_by_Thomas_Foolery_.mp3")
# Track.create!(title: 'Windows', album_id: ten.id, ord: 4, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/274/original/04_-_Windows_%28Ft_Alex_Wiley_and_Akenya_Seymour%29.mp3")
# Track.create!(title: 'Brain Cells', album_id: ten.id, ord: 5, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/275/original/05_-_Brain_Cells__prod_by_Peter_Cottontale_.mp3")
# Track.create!(title: 'Long Time', album_id: ten.id, ord: 6, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/277/original/06_-_Long_Time.mp3")
# Track.create!(title: '22 Offs', album_id: ten.id, ord: 7, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/278/original/07_-_22_Offs.mp3")

savage = Artist.create!(name: '21 Savage', image: File.open('app/assets/images/new_images/21savage.jpg'))
issa = Album.create!(name: 'Issa Album', artist_id: savage.id, image: File.open('app/assets/images/new_images/issa.png'))
Track.create!(title: 'Bank Account', album_id: issa.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/346/original/02_Bank_Account.mp3")

calvin = Artist.create!(name: 'Calvin Harris', image: File.open('app/assets/images/new_images/calvin.jpg'))
rollin = Album.create!(name: 'Rollin', artist_id: calvin.id, image: File.open('app/assets/images/new_images/rollin.jpg'))
Track.create!(title: 'Rollin', album_id: rollin.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/347/original/01_Rollin.mp3")

slide = Album.create!(name: 'Slide', artist_id: calvin.id, image: File.open('app/assets/images/new_images/slide.jpg'))
Track.create!(title: 'Slide', album_id: slide.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/347/original/01_Rollin.mp3")

rick = Artist.create!(name: 'Rick Ross', image: File.open("app/assets/images/new_images/rick.jpg"))
rytm = Album.create!(name: 'Rather You Than Me', artist_id: rick.id, image: File.open("app/assets/images/new_images/traptraptrap.jpg"))
Track.create!(title: 'Trap Trap Trap', album_id: rytm.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/347/original/01_Rollin.mp3")

yogotti = Artist.create!(name: 'Yo Gotti', image: File.open("app/assets/images/new_images/yogotti.jpg"))
rakeitup = Album.create!(name: 'Rake It Up (Feat. Nicki Minaj)', artist_id: yogotti.id, image: File.open("app/assets/images/new_images/rake_it_up.jpg"))
Track.create!(title: "Rake It Up", album_id: rakeitup.id, ord: 1, audio: "http://s3.amazonaws.com/spitfire-dev/tracks/audios/000/000/350/original/YoGottiFeatNickiMinaj_RakeItUp_RakeItUp_1.mp3")
