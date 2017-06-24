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
Track.create(title: 'Free Smoke', ord: 1, album_id: 1)
Track.create(title: 'No Long Talk', ord: 2, album_id: 1)
Track.create(title: 'Passionfruit', ord: 3, album_id: 1)
Track.create(title: 'Jorja Interlude', ord: 4, album_id: 1)
Track.create(title: 'Get It Together', ord: 5, album_id: 1)
Track.create(title: 'Madiba Riddim', ord: 6, album_id: 1)
Track.create(title: 'Blem', ord: 7, album_id: 1)
Track.create(title: '4422', ord: 8, album_id: 1)
Track.create(title: 'Gyalchester', ord: 9, album_id: 1)
Track.create(title: 'Skepta Interlude', ord: 10, album_id: 1)
Track.create(title: 'Portland', ord: 11, album_id: 1)
Track.create(title: 'Sacrifices', ord: 12, album_id: 1)
Track.create(title: 'Nothings Into Somethings', ord: 13, album_id: 1)
Track.create(title: 'Teenage Forever', ord: 14, album_id: 1)
Track.create(title: 'KMT', ord: 15, album_id: 1)
Track.create(title: 'Lose You', ord: 16, album_id: 1)
Track.create(title: "Can't have everything", ord: 17, album_id: 1)
Track.create(title: 'Glow', ord: 18, album_id: 1)
Track.create(title: 'Since Way Back', ord: 19, album_id: 1)
Track.create(title: 'Fake Lobe', ord: 20, album_id: 1)
Track.create(title: 'Ice Melts', ord: 21, album_id: 1)
Track.create(title: 'Do Not Disturb', ord: 22, album_id: 1)

Track.create(title: 'Up Up & Away', album_id: 13, ord: 15)
