# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Subvent.create(vent_title: 'Dogs',description:'Sub-vent for dogs')
Post.create(post_title: "Dogs are Evil",post_content: "My dog bit me last night",subvent_id:1)
Comment.create(content: "Dogs are Good WTF",post_id:1)
Post.create(post_title: "Dogs are Cool",post_content: "My dog licked me last night",subvent_id:1)
Comment.create(content: "Dogs are trash" ,post_id:2)



Subvent.create(vent_title: 'Cats',description:'Sub-vent for cats')
Post.create(post_title: "Cats are Evil",post_content: "My Cat bit me last night",subvent_id:2)
Comment.create(content: "Cats are Good WTF",post_id:3)
Post.create(post_title: "Cats are COol",post_content: "My Cat licked me last night",subvent_id:2)
Comment.create(content: "Cats are trash",post_id:4)


User.create(username: "BigJohn97",email: "BigJohn97@gmail.com",password_digest:"1231")



