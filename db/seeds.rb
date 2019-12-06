# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)






User.create(username:'jorge',email:'jorge2@gmail.com',password:"123456")


Subvent.create(vent_title: 'Dogs',image_url: "https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg", description:'Doggo ipsum adorable doggo you are doing me the shock big ol snoot very hand that feed shibe smol borking doggo with a long snoot for pats, long woofer aqua doggo he made many woofs doing me a frighten. Borking doggo fat boi very taste wow most angery pupper ',user_id:1)
Post.create(post_title: "Dogs are Evil",post_content: "My dog bit me last night",subvent_id:1)
Comment.create(content: "Dogs are Good WTF",post_id:1)
Post.create(post_title: "Dogs are Cool",post_content: "My dog licked me last night",subvent_id:1)
Comment.create(content: "Dogs are trash" ,post_id:2)



Subvent.create(vent_title: 'Cats',image_url:"https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1253,w_2228,x_771,y_0/dpr_1.5/c_limit,w_1600/fl_lossy,q_auto/v1563492556/Screen_Shot_2019-07-18_at_7.15.40_PM_d3jhmd" ,description:'Sub-vent for cats')
Post.create(post_title: "Cats are Evil",post_content: "My Cat bit me last night",subvent_id:2)
Comment.create(content: "Cats are Good WTF",post_id:3)
Post.create(post_title: "Cats are COol",post_content: "My Cat licked me last night",subvent_id:2)
Comment.create(content: "Cats are trash",post_id:4)
